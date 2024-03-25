function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
      newUserName: '',
      newUserCity: '',
      removeUserIndex: null
    },
    created: async function  () {
      this.usersService = users();
      this.usersService.get().then((response)=> {this.users = response.data})

      // this.usersService.get().then(res=>console.log(res))
      // this.usersService.post({name:"TESST", city:"Cluj"}).then((response) => {this.users=response.data.data});
     
    },
    methods: {
      addUser: function () {
        console.log("Add user")
        users.push( {
            name: this.newUserName,
            city: this.newUserCity
          })
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error('Error adding user:', error);
          });

        this.newUserName = '';
        this.newUserCity = '';
      },
      removeUser: function () {
        axios.delete('http://localhost:3000/removeUser?index=${this.removeUserIndex}')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error('Error removing user:', error);
          });

        this.removeUserIndex = null;
      }
    },
  });
}
document.addEventListener("DOMContentLoaded", () => {
  run();
});
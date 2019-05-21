var user = {
    email: 'danielmfigueroa@gmail.com',
    firstName: 'Daniel',
    lastName: 'Figueroa',
    
    login() {
        console.log(this.email, 'esta logado');
    },

    logout(){
        console.log(this.email, 'esta deslogado');
    }
};


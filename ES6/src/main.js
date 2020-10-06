class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Sua biblioteca no YouTube',
            description: 'Acesse a sua biblioteca onde você estiver.',
            avatar_url: 'https://diariodegoias.com.br/wp-content/uploads/2017/02/youtube.jpg',
            html_url: 'https://youtube.com/feed/libraly',
        });

        console.log(this.repositories);
    }
}

new App();
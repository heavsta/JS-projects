class GitHub {
    constructor() {
        this.client_id = '871aa38e3563849b8fbb';
        this.client_secret= '06a2a404aa1dfd27e09f2446242e0b1f45ea828b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
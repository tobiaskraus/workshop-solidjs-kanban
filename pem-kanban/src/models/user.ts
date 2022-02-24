export class User {
    constructor(
        public id: number,
        public username: string,
        private gender: 'male' | 'female' | 'human'
    ) {}

    get icon() {
        return `https://avatars.dicebear.com/api/${this.gender}/${this.username}.svg`;
    }
}

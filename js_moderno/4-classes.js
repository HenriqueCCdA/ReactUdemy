class Animal{
    constructor(f){
        this.familia = f;
    }

    andar = () => {
        return 'andando...'
    }
}

class Cachorro extends Animal{
    constructor(n, i){
        super('Carnívoros')
        this.nome = n;
        this.idade = i;
    }

    nome = 'Rex';
    latir() {
        return `${this.nome}: au! au!`
    }
}

let rex = new Cachorro('Rex', 2);
console.log(rex);
console.log(rex.latir());
console.log(rex.andar());
console.log(rex.familia);
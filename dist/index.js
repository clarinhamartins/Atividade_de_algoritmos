"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Musica {
    titulo;
    artista;
    duracao;
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
    tocar() {
        console.log(`Tocando ${this.titulo} de ${this.artista}`);
    }
}
let musica = new Musica('Outra vida', 'Armandinho', 215);
musica.tocar();
//# sourceMappingURL=index.js.map
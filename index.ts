//Código da música e artista
class Musica {
  titulo: string;
  artista: string;
  duracao: number;

  constructor(titulo: string, artista: string, duracao: number) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
  }

  tocar(): void {
    console.log(`Tocando ${this.titulo} de ${this.artista}`);
  }
}

let musica = new Musica('Outra vida', 'Armandinho', 215);
musica.tocar();

//Código do cachorro
class Cachorro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  latir(): void {
    console.log('Au au!');
  }
}

let meuCachorro = new Cachorro("Jerry");
meuCachorro.latir();

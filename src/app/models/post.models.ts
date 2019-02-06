export class Post {

  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: string;
  categoria: string;

  constructor(pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pCategoria: string) {

    this.titulo = pTitulo;
    this.texto = pTexto;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.fecha = `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`;
    this.categoria = pCategoria;

  }
}

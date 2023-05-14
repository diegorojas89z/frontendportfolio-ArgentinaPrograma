export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    cargoactual: string;
    img: string;

    constructor(nombre: string,apellido: string, descripcion:string, cargoactual:string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion=descripcion;
        this.cargoactual=cargoactual;
        this.img = img;
    }
}
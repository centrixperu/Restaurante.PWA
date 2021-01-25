import { Menu } from "./menu.model";
import { Rol } from "./rol.model";

export class Usuario {
    userId:string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    token?: string;
    menues?: Menu[];
    logo?: string;
    perfilDescripcion: string;
    sociedadId: string;
    roles?: Rol[];
    cargo?: string;
    correo?: string;
    sociedad?: string; // descripcion
    userName: string;
}

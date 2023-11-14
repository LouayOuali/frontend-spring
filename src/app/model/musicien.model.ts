import { Band } from "./band.model";


export class Musicien { 
    idMusicien?: number; 
    nomMusicien?: string; 
    anneeExp?: number;
    salaire?: number; 
    instrument?: string; 
    band!: Band;
}
import { IPoint3D } from "./IPoint3D";

export interface IBox3D {
    scale: IPoint3D;
    position: IPoint3D;
    rotate: IPoint3D;
    pivot: IPoint3D;
}

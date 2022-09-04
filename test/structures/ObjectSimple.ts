import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectSimple = ObjectSimple.IBox3D;
export namespace ObjectSimple {
    export interface IBox3D {
        scale: IPoint3D;
        position: IPoint3D;
        rotate: IPoint3D;
        pivot: IPoint3D;
    }
    export interface IPoint3D {
        x: number;
        y: number;
        z: number;
    }

    export function generate(): ObjectSimple {
        return {
            scale: generate_point(),
            position: generate_point(),
            rotate: generate_point(),
            pivot: generate_point(),
        };
    }
    function generate_point(): IPoint3D {
        return {
            x: RandomGenerator.integer(),
            y: RandomGenerator.integer(),
            z: RandomGenerator.integer(),
        };
    }
}

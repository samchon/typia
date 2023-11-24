import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

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
    const point = (): IPoint3D => ({
      x: TestRandomGenerator.integer(),
      y: TestRandomGenerator.integer(),
      z: TestRandomGenerator.integer(),
    });
    return {
      scale: point(),
      position: point(),
      rotate: point(),
      pivot: point(),
    };
  }

  export function trail(): ObjectSimple {
    const data = generate();
    data.pivot.z = null!;
    return data;
  }

  export const SPOILERS: Spoiler<ObjectSimple>[] = [
    (input) => {
      input.scale.x = "number" as any;
      return ["$input.scale.x"];
    },
    (input) => {
      input.position = {} as any;
      return ["$input.position.x", "$input.position.y", "$input.position.z"];
    },
    (input) => {
      input.rotate = undefined!;
      return ["$input.rotate"];
    },
    (input) => {
      input.pivot = null!;
      return ["$input.pivot"];
    },
  ];
}

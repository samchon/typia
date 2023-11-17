import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectNullable = IPointer<ObjectNullable.IProduct[]>;
export namespace ObjectNullable {
  export interface IProduct {
    name: string;
    manufacturer: IManufacturer;
    brand: IBrand | null;
    similar: IManufacturer | IBrand | null;
  }
  export interface IManufacturer {
    type: "manufacturer";
    name: string;
  }
  export interface IBrand {
    type: "brand";
    name: string;
  }

  export function generate(): ObjectNullable {
    const product: () => Omit<IProduct, "similar"> = () => ({
      name: TestRandomGenerator.string(),
      manufacturer: {
        type: "manufacturer",
        name: TestRandomGenerator.string(),
      },
      brand: {
        type: "brand",
        name: TestRandomGenerator.string(),
      },
    });
    return {
      value: [
        { ...product(), similar: null },
        {
          ...product(),
          brand: null,
          similar: {
            type: "manufacturer",
            name: TestRandomGenerator.string(),
          },
        },
        {
          ...product(),
          similar: {
            type: "brand",
            name: TestRandomGenerator.string(),
          },
        },
      ],
    };
  }

  export const SPOILERS: Spoiler<ObjectNullable>[] = [
    (input) => {
      input.value[0]!.name = undefined!;
      return [`$input.value[0].name`];
    },
    (input) => {
      input.value[1]!.manufacturer.type = "something" as any;
      return [`$input.value[1].manufacturer.type`];
    },
    (input) => {
      input.value[2]!.manufacturer.name = undefined!;
      return [`$input.value[2].manufacturer.name`];
    },
    (input) => {
      input.value[0]!.manufacturer = {} as any;
      return [
        `$input.value[0].manufacturer.type`,
        `$input.value[0].manufacturer.name`,
      ];
    },
    (input) => {
      input.value[1]!.brand = {} as any;
      return [`$input.value[1].brand.name`, `$input.value[1].brand.type`];
    },
    (input) => {
      input.value[2]!.brand = {
        type: "brand",
        name: undefined!,
      };
      return [`$input.value[2].brand.name`];
    },
    (input) => {
      input.value[0]!.brand = {
        type: "something" as "brand",
        name: "something",
      };
      return [`$input.value[0].brand.type`];
    },
    (input) => {
      input.value[1]!.similar = undefined!;
      return [`$input.value[1].similar`];
    },
    (input) => {
      input.value[2]!.similar = {
        type: "manufacturer",
        name: undefined!,
      };
      return [`$input.value[2].similar.name`];
    },
    (input) => {
      input.value[0]!.similar = {} as any;
      return [`$input.value[0].similar`];
    },
  ];
}

import { Spoiler } from "../helpers/Spoiler";

export type ObjectPropertyNullable = [
  ObjectPropertyNullable.IPointer<boolean>[],
  ObjectPropertyNullable.IPointer<number>[],
  ObjectPropertyNullable.IPointer<string>[],
  ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>[],
];
export namespace ObjectPropertyNullable {
  export interface IPointer<T> {
    value: T | null;
  }
  export interface IMember {
    id: string;
    name: string | null;
    grade?: undefined | number;
    serial?: undefined | number | null;
    activated: boolean | null;
  }

  export function generate(): ObjectPropertyNullable {
    return [
      [{ value: false }, { value: true }, { value: null }],
      [{ value: null }, { value: 1 }],
      [{ value: null }, { value: "two" }],
      [...generate_member_pointers(), { value: null }],
    ];
  }

  function generate_member_pointers(): IPointer<IMember>[] {
    const members: IMember[] = [];
    for (const name of ["someone", null])
      for (const grade of [1, undefined])
        for (const serial of [null, 1, undefined])
          for (const activated of [false, null])
            members.push({
              id: "id",
              name,
              grade,
              serial,
              activated,
            });
    return members.map((value) => ({ value }));
  }

  export const SPOILERS: Spoiler<ObjectPropertyNullable>[] = [
    (input) => {
      input[0]![0]!.value = "boolean" as any;
      return ["$input[0][0].value"];
    },
    (input) => {
      input[1]![0]!.value = "number" as any;
      return ["$input[1][0].value"];
    },
    (input) => {
      input[2]![0]!.value = {} as any;
      return ["$input[2][0].value"];
    },
    (input) => {
      input[3]![0]!.value = {} as any;
      return [
        "$input[3][0].value.id",
        "$input[3][0].value.name",
        "$input[3][0].value.activated",
      ];
    },
  ];

  export const BINARABLE = false;
}

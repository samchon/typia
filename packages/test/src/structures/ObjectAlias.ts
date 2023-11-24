import { Spoiler } from "../helpers/Spoiler";

export type ObjectAlias = ObjectAlias.Alias[];
export namespace ObjectAlias {
  export type Alias = IMember;
  export interface IMember {
    id: string | null;
    email: string;
    name: string;
    sex: "male" | "female" | 1 | 2 | null;
    age: number | null;
    dead: boolean | null;
  }

  export function generate(): ObjectAlias {
    const output: ObjectAlias = [];
    for (const id of ["id", null])
      for (const sex of ["male", "female", 1, 2, null] as const)
        for (const age of [1, null])
          for (const dead of [false, true, null])
            output.push({
              id,
              email: "someone@someone.com",
              name: "someone",
              sex,
              age,
              dead,
            });
    return output;
  }

  export const SPOILERS: Spoiler<ObjectAlias>[] = [
    (input) => {
      input[0]!.id = {} as any;
      return ["$input[0].id"];
    },
    (input) => {
      input[1]!.email = { value: "email" } as any;
      return ["$input[1].email"];
    },
    (input) => {
      input[2]!.name = null!;
      return ["$input[2].name"];
    },
    (input) => {
      input[3]!.sex = 3 as 2;
      return ["$input[3].sex"];
    },
    (input) => {
      input[4]!.age = "old" as any;
      return ["$input[4].age"];
    },
    (input) => {
      input[5]!.dead = 1 as any;
      return ["$input[5].dead"];
    },
  ];

  export const BINARABLE = false;
}

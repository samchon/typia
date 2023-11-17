import { Spoiler } from "../helpers/Spoiler";

export type ObjectUndefined = ObjectUndefined.ILecture[];
export namespace ObjectUndefined {
  export const BINARABLE = false;

  export interface ILecture {
    name: string;
    professor?: undefined | string | number;
    classroom?: undefined | IClassroom;
    grade: number | undefined;
    nothing: undefined;
    unknown: unknown;
    never: never;
  }
  export interface IClassroom {
    id: string;
    name: string;
  }

  export function generate() {
    const output: ObjectUndefined = [];
    const name: string = "someone";
    const nothing: undefined = undefined;

    for (const professor of [undefined, "professor", 1])
      for (const grade of [undefined, 1])
        for (const classroom of [false, true])
          output.push({
            name,
            professor,
            grade,
            classroom: classroom
              ? {
                  id: "id",
                  name: "somewhere",
                }
              : undefined,
            nothing,
            unknown: null!,
            never: undefined!,
          });

    return output;
  }

  export const SPOILERS: Spoiler<ObjectUndefined>[] = [
    (input) => {
      input[0]!.name = null!;
      return ["$input[0].name"];
    },
    (input) => {
      input[0]!.professor = null!;
      return ["$input[0].professor"];
    },
    (input) => {
      input[0]!.classroom = {} as any;
      return ["$input[0].classroom.id", "$input[0].classroom.name"];
    },
    (input) => {
      input[0]!.grade = null!;
      return ["$input[0].grade"];
    },
    (input) => {
      input[0]!.nothing = "undefined" as any;
      return ["$input[0].nothing"];
    },
    (input) => {
      (input[0]! as any).never = "undefined" as any;
      return ["$input[0].never"];
    },
  ];
}

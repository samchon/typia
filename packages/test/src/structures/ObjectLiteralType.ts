import { Spoiler } from "../helpers/Spoiler";

export type ObjectLiteralType = ReturnType<typeof data>;
export namespace ObjectLiteralType {
  export function generate() {
    return data();
  }

  export const SPOILERS: Spoiler<ObjectLiteralType>[] = [
    (input) => {
      input.id = {} as any;
      return [`$input.id`];
    },
    (input) => {
      input.name = null!;
      return [`$input.name`];
    },
    (input) => {
      input.age = "100" as any;
      return [`$input.age`];
    },
  ];
}

const data = () => ({
  id: "id",
  name: "old man",
  age: 100,
});

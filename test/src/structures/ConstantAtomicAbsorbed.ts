import { tags } from "typia";

import { Spoiler } from "../helpers/Spoiler";

export interface ConstantAtomicAbsorbed {
  id: "latest" | (string & tags.Default<"something">);
  age: -1 | (number & tags.Default<20>);
}
export namespace ConstantAtomicAbsorbed {
  export const generate = (): ConstantAtomicAbsorbed => ({
    id: "something",
    age: 20,
  });
  export const SPOILERS: Spoiler<ConstantAtomicAbsorbed>[] = [
    (input) => {
      input.id = Number("not a string value") as any;
      return ["$input.id"];
    },
    (input) => {
      input.age = "20" as any;
      return ["$input.age"];
    },
  ];
}

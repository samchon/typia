import { tags } from "typia";

import { Spoiler } from "../utils/Spoiler";

/** Supplies literal escape branches beside tagged primitive alternatives. */
export interface ConstantAtomicTagged {
  id: "latest" | (string & tags.Format<"uuid">);
  age: -1 | (number & tags.Type<"uint32"> & tags.Maximum<100>);
}
export namespace ConstantAtomicTagged {
  /** Constructs a fresh object using both authored literal escape branches. */
  export const generate = (): ConstantAtomicTagged => ({
    id: "latest",
    age: -1,
  });
  export const SPOILERS: Spoiler<ConstantAtomicTagged>[] = [
    (input) => {
      input.id = "not a uuid" as any;
      return ["$input.id"];
    },
    (input) => {
      input.age = 101 as any;
      return ["$input.age"];
    },
  ];
}

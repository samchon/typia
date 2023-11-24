import typia from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface TypeTagCustom {
  id: string & typia.tags.Format<"uuid">;
  dollar: string & Dollar;
  postfix: string & Postfix<"abcd">;
  powerOf: number & PowerOf<2>;
}
export namespace TypeTagCustom {
  export function generate(): TypeTagCustom {
    return {
      id: v4(),
      dollar: "$" + TestRandomGenerator.integer(),
      postfix: TestRandomGenerator.string() + "abcd",
      powerOf: 1024,
    };
  }

  export const SPOILERS: Spoiler<TypeTagCustom>[] = [
    (input) => {
      input.id = "invalid";
      return ["$input.id"];
    },
    (input) => {
      input.dollar = TestRandomGenerator.integer().toString();
      return ["$input.dollar"];
    },
    (input) => {
      input.postfix = TestRandomGenerator.string() + "dcba";
      return ["$input.postfix"];
    },
    (input) => {
      input.powerOf = 1000;
      return ["$input.powerOf"];
    },
  ];

  export const RANDOM: typia.IRandomGenerator = {
    ...TestRandomGenerator,
    customs: {
      string: (tags) => {
        if (tags.find((t) => t.kind === "dollar") !== undefined)
          return "$" + TestRandomGenerator.integer();
        const postfix = tags.find((t) => t.kind === "postfix");
        if (postfix !== undefined)
          return TestRandomGenerator.string() + postfix.value;
        return undefined;
      },
      number: (tags) => {
        const powerOf = tags.find((t) => t.kind === "powerOf");
        if (powerOf !== undefined)
          return Math.pow(
            Number(powerOf.value),
            TestRandomGenerator.integer(1, 10),
          );
        return undefined;
      },
    },
  };
}

type Dollar = typia.tags.TagBase<{
  kind: "dollar";
  target: "string";
  value: undefined;
  validate: `$input[0] === "$" && !isNaN(Number($input.substring(1).split(",").join("")))`;
}>;

type Postfix<Value extends string> = typia.tags.TagBase<{
  kind: "postfix";
  target: "string";
  value: Value;
  validate: `$input.endsWith("${Value}")`;
}>;

type PowerOf<Value extends number> = typia.tags.TagBase<{
  kind: "powerOf";
  target: "number";
  value: Value;
  validate: `(() => {
        const denominator: number = Math.log(${Value});
        const value: number = Math.log($input) / denominator;
        return Math.abs(value - Math.round(value)) < 0.00000001;
    })()`;
}>;

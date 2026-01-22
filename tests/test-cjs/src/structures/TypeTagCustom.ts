import typia, { IRandomGenerator } from "typia";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomString } from "typia/lib/internal/_randomString";
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

  export const RANDOM: Partial<IRandomGenerator> = {
    string: (schema) => {
      if ((schema as any)["x-typia-monetary"] === "dollar")
        return "$" + TestRandomGenerator.integer();
      else if ((schema as any)["x-typia-postfix"] !== undefined)
        return (
          TestRandomGenerator.string() + (schema as any)["x-typia-postfix"]
        );
      return _randomString(schema);
    },
    number: (schema) => {
      if ((schema as any)["x-typia-powerOf"] !== undefined) {
        const powerOf = (schema as any)["x-typia-powerOf"];
        return Math.pow(powerOf, TestRandomGenerator.integer(1, 10));
      }
      return _randomNumber(schema);
    },
  };
}

type Dollar = typia.tags.TagBase<{
  kind: "monetary";
  target: "string";
  value: "dollar";
  validate: `$input[0] === "$" && !isNaN(Number($input.substring(1).split(",").join("")))`;
  schema: {
    "x-typia-monetary": "dollar";
  };
}>;

type Postfix<Value extends string> = typia.tags.TagBase<{
  kind: "postfix";
  target: "string";
  value: Value;
  validate: `$input.endsWith("${Value}")`;
  schema: {
    "x-typia-postfix": Value;
  };
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
  schema: {
    "x-typia-powerOf": Value;
  };
}>;

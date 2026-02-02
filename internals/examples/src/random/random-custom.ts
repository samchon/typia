import typia from "typia";
import { _randomNumber } from "typia/src/internal/_randomNumber.js";
import { _randomString } from "typia/src/internal/_randomString.js";

const data: TagCustom = typia.random<TagCustom>({
  string: (schema) => {
    if ((schema as any)["x-typia-monetary"] === "dollar")
      return "$" + Math.floor(Math.random() * 1_000);
    else if ((schema as any)["x-typia-postfix"] !== undefined)
      return _randomString(schema) + (schema as any)["x-typia-postfix"];
    return _randomString(schema);
  },
  number: (schema) => {
    if ((schema as any)["x-typia-powerOf"] !== undefined) {
      const powerOf = (schema as any)["x-typia-powerOf"];
      return Math.pow(powerOf, Math.floor(Math.random() * 10) + 1);
    }
    return _randomNumber(schema);
  },
});
console.log(data);

interface TagCustom {
  id: string & typia.tags.Format<"uuid">;
  dollar: string & Dollar;
  postfix: string & Postfix<"abcd">;
  powerOf: number & PowerOf<2>;
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

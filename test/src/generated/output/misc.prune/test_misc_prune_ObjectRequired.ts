import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectRequired } from "../../../structures/ObjectRequired";
export const test_misc_prune_ObjectRequired = _test_misc_prune(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  ((input: ObjectRequired): void => {
    const $io1 = (input: any): boolean =>
      (undefined === input.boolean || "boolean" === typeof input.boolean) &&
      (undefined === input.number || "number" === typeof input.number) &&
      (undefined === input.string || "string" === typeof input.string) &&
      (undefined === input.array ||
        (Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem))) &&
      (null === input.object ||
        undefined === input.object ||
        ("object" === typeof input.object &&
          null !== input.object &&
          false === Array.isArray(input.object) &&
          $io1(input.object)));
    const $po0 = (input: any): any => {
      if ("object" === typeof input.object && null !== input.object)
        $po1(input.object);
      for (const key of Object.keys(input)) {
        if (
          "boolean" === key ||
          "number" === key ||
          "string" === key ||
          "array" === key ||
          "object" === key
        )
          continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      if ("object" === typeof input.object && null !== input.object)
        $po1(input.object);
      for (const key of Object.keys(input)) {
        if (
          "boolean" === key ||
          "number" === key ||
          "string" === key ||
          "array" === key ||
          "object" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);

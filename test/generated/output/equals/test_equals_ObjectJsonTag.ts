import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_equals_ObjectJsonTag = _test_equals(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
  ((input: any, _exceptionable: boolean = true): input is ObjectJsonTag => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.vulnerable &&
      "string" === typeof input.description &&
      "string" === typeof input.title &&
      "string" === typeof input.complicate_title &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["vulnerable", "description", "title", "complicate_title"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  })(input),
);

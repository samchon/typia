import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_equals_ObjectHttpAtomic = _test_equals(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  ((input: any, _exceptionable: boolean = true): input is ObjectHttpAtomic => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "boolean" === typeof input.boolean &&
      "bigint" === typeof input.bigint &&
      "number" === typeof input.number &&
      Number.isFinite(input.number) &&
      "string" === typeof input.string &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["boolean", "bigint", "number", "string"].some(
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

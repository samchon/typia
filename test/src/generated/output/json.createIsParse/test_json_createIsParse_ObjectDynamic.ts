import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_json_createIsParse_ObjectDynamic = _test_json_isParse(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)(
  (input: any): import("typia").Primitive<ObjectDynamic> => {
    const is = (input: any): input is ObjectDynamic => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return (
            "string" === typeof value ||
            ("number" === typeof value && Number.isFinite(value)) ||
            "boolean" === typeof value
          );
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);

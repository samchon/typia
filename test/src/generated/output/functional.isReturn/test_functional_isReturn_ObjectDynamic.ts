import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_functional_isReturn_ObjectDynamic = _test_functional_isReturn(
  "ObjectDynamic",
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => ObjectDynamic) =>
    (input: ObjectDynamic): ObjectDynamic | null => {
      const result = p(input);
      return ((input: any): input is ObjectDynamic => {
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
      })(result)
        ? result
        : null;
    },
);

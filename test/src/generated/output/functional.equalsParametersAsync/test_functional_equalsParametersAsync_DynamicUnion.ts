import typia from "typia";
import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { DynamicUnion } from "../../../structures/DynamicUnion";
export const test_functional_equalsParametersAsync_DynamicUnion =
  _test_functional_equalsParametersAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      async (input: DynamicUnion): Promise<DynamicUnion | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is DynamicUnion => {
            const $join = (typia.functional.equalsParameters as any).join;
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (
                  "number" === typeof Number(key) &&
                  Number.isFinite(Number(key))
                )
                  return "string" === typeof value;
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return "number" === typeof value && Number.isFinite(value);
                return false;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_functional_equalsParametersAsync_DynamicConstant =
  _test_functional_equalsParametersAsync("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      async (input: DynamicConstant): Promise<DynamicConstant | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is DynamicConstant => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              $io1(input.value, true && _exceptionable) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.a &&
              Number.isFinite(input.a) &&
              "number" === typeof input.b &&
              Number.isFinite(input.b) &&
              "number" === typeof input.c &&
              Number.isFinite(input.c) &&
              "number" === typeof input.d &&
              Number.isFinite(input.d) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["a", "b", "c", "d"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

import typia from "typia";
import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ToJsonArray } from "../../../structures/ToJsonArray";
export const test_functional_equalsParametersAsync_ToJsonArray =
  _test_functional_equalsParametersAsync("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
      async (input: ToJsonArray): Promise<ToJsonArray | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonArray => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.length === 4 &&
              "object" === typeof input[0] &&
              null !== input[0] &&
              $io0(input[0], true) &&
              "object" === typeof input[1] &&
              null !== input[1] &&
              $io1(input[1], true) &&
              "object" === typeof input[2] &&
              null !== input[2] &&
              $io2(input[2], true) &&
              "object" === typeof input[3] &&
              null !== input[3] &&
              $io3(input[3], true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { DynamicArray } from "../../../structures/DynamicArray";
export const test_functional_isParameters_DynamicArray =
  _test_functional_isParameters("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      (input: DynamicArray): DynamicArray | null => {
        if (
          false ===
          ((input: any): input is DynamicArray => {
            const $io0 = (input: any): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              false === Array.isArray(input.value) &&
              $io1(input.value);
            const $io1 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  Array.isArray(value) &&
                  value.every((elem: any) => "string" === typeof elem)
                );
              });
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );

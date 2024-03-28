import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_functional_isParametersAsync_DynamicNever =
  _test_functional_isParametersAsync("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => Promise<DynamicNever>) =>
      async (input: DynamicNever): Promise<DynamicNever | null> => {
        if (
          false ===
          ((input: any): input is DynamicNever => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return null !== value && undefined === value;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

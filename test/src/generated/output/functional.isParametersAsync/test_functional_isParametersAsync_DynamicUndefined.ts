import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_functional_isParametersAsync_DynamicUndefined =
  _test_functional_isParametersAsync("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      async (input: DynamicUndefined): Promise<DynamicUndefined | null> => {
        if (
          false ===
          ((input: any): input is DynamicUndefined => {
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

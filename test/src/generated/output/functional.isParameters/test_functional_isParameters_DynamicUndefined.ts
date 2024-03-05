import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_functional_isParameters_DynamicUndefined =
  _test_functional_isParameters("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      (input: DynamicUndefined): DynamicUndefined | null => {
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

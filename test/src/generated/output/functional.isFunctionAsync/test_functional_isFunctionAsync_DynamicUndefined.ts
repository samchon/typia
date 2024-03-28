import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_functional_isFunctionAsync_DynamicUndefined =
  _test_functional_isFunctionAsync("DynamicUndefined")(DynamicUndefined)(
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
        const result = await p(input);
        return ((input: any): input is DynamicUndefined => {
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
        })(result)
          ? result
          : null;
      },
  );

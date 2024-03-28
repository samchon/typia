import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_functional_isReturnAsync_DynamicTag =
  _test_functional_isReturnAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      async (input: DynamicTag): Promise<DynamicTag | null> => {
        const result = await p(input);
        return ((input: any): input is DynamicTag => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                0 <= Number(key) &&
                Number(key) < 10
              )
                return "bigint" === typeof value && BigInt(0) <= value;
              if (
                "string" === typeof key &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  key,
                )
              )
                return (
                  "string" === typeof value &&
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                    value,
                  )
                );
              return true;
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

import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_functional_isParametersAsync_ToJsonNull =
  _test_functional_isParametersAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      async (input: ToJsonNull): Promise<ToJsonNull | null> => {
        if (
          false ===
          ((input: any): input is ToJsonNull => {
            const $io0 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );

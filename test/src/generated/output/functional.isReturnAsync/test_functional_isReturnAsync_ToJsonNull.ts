import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_functional_isReturnAsync_ToJsonNull =
  _test_functional_isReturnAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      async (input: ToJsonNull): Promise<ToJsonNull | null> => {
        const result = await p(input);
        return ((input: any): input is ToJsonNull => {
          const $io0 = (input: any): boolean =>
            "function" === typeof input.toJSON;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );

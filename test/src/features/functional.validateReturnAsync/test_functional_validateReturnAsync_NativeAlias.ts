import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_validateReturnAsync_NativeAlias =
  _test_functional_validateReturnAsync("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => Promise<NativeAlias>) =>
      typia.functional.validateReturn(p),
  );

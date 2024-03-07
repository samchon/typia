import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_isReturnAsync_NativeAlias =
  _test_functional_isReturnAsync("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => Promise<NativeAlias>) =>
      typia.functional.isReturn(p),
  );

import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_isFunctionAsync_NativeAlias =
  _test_functional_isFunctionAsync("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => Promise<NativeAlias>) =>
      typia.functional.isFunction(p),
  );

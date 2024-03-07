import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_isFunctionAsync_NativeSimple =
  _test_functional_isFunctionAsync("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => Promise<NativeSimple>) =>
      typia.functional.isFunction(p),
  );

import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_isFunction_NativeSimple =
  _test_functional_isFunction("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      typia.functional.isFunction(p),
  );

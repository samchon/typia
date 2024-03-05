import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_isFunction_NativeAlias =
  _test_functional_isFunction("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) => typia.functional.isFunction(p),
  );

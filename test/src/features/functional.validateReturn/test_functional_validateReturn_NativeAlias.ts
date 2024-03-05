import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_validateReturn_NativeAlias =
  _test_functional_validateReturn("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.validateReturn(p),
  );

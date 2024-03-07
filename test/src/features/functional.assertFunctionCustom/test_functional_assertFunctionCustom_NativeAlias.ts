import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { NativeAlias } from "../../structures/NativeAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_NativeAlias =
  _test_functional_assertFunction(CustomGuardError)("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );

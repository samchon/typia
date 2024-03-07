import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeSimple } from "../../structures/NativeSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_NativeSimple =
  _test_functional_assertReturn(CustomGuardError)("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

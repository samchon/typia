import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertReturnCustom_NativeAlias =
  _test_functional_assertReturn(CustomGuardError)("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

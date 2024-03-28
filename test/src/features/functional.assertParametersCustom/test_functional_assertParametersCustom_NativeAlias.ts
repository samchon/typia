import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertParametersCustom_NativeAlias =
  _test_functional_assertParameters(CustomGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => NativeAlias) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

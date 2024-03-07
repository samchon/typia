import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeAlias } from "../../structures/NativeAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_NativeAlias =
  _test_functional_assertParameters(CustomGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => NativeAlias) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertParametersCustom_UltimateUnion =
  _test_functional_assertParameters(CustomGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => UltimateUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

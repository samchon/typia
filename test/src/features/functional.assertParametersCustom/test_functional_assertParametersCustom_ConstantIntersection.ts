import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertParametersCustom_ConstantIntersection =
  _test_functional_assertParameters(CustomGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

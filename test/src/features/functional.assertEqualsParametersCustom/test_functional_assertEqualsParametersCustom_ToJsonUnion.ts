import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsParametersCustom_ToJsonUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => ToJsonUnion) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

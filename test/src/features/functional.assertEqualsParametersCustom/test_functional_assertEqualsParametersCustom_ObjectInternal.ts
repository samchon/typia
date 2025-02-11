import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsParametersCustom_ObjectInternal =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

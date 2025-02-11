import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsParametersCustom_ObjectUndefined =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

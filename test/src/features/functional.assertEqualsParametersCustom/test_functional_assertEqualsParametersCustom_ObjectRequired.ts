import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsParametersCustom_ObjectRequired =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

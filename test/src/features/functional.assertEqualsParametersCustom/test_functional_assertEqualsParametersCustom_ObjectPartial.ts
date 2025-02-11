import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsParametersCustom_ObjectPartial =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

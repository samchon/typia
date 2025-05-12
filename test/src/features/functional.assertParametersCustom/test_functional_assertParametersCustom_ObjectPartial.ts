import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertParametersCustom_ObjectPartial =
  _test_functional_assertParameters(CustomGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

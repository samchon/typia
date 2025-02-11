import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsParametersCustom_ObjectTuple =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => ObjectTuple) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

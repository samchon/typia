import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectTuple =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );

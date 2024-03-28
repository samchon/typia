import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertParametersAsyncCustom_ObjectTuple =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

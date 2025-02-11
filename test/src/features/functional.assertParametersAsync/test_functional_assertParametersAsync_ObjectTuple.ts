import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertParametersAsync_ObjectTuple =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertParameters(p),
  );

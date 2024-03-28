import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsFunctionAsync_ObjectTuple =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertEqualsFunction(p),
  );

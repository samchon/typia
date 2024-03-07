import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectTuple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertEqualsReturn(p),
  );

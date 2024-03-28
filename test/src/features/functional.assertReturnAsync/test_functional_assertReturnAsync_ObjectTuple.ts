import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertReturnAsync_ObjectTuple =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertReturn(p),
  );

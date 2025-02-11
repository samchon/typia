import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsReturnAsync_ObjectUndefined =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertEqualsReturn(p),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertReturnAsync_ObjectUndefined =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertReturn(p),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertReturnAsync_ObjectRecursive =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertReturn(p),
  );

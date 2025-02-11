import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsReturnAsync_ObjectRecursive =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertEqualsReturn(p),
  );

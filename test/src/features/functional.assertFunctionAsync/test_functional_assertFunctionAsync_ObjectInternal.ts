import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectInternal =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.assertFunction(p),
  );

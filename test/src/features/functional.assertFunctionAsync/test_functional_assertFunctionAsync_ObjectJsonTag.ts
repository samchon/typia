import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertFunctionAsync_ObjectJsonTag =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertFunction(p),
  );

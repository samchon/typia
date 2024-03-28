import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertFunctionAsync_ObjectSimple =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertFunction(p),
  );

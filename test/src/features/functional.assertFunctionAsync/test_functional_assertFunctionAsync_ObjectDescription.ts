import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertFunctionAsync_ObjectDescription =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.assertFunction(p),
  );

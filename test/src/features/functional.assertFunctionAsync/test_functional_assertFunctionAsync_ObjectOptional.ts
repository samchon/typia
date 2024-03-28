import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertFunctionAsync_ObjectOptional =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertFunction(p),
  );

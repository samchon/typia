import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertFunctionAsync_ClassNonPublic =
  _test_functional_assertFunctionAsync(TypeGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
    typia.functional.assertFunction(p),
  );

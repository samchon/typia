import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertParametersAsync_ClassNonPublic =
  _test_functional_assertParametersAsync(TypeGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
    typia.functional.assertParameters(p),
  );

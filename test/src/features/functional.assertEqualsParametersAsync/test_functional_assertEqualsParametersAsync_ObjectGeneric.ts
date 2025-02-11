import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsParametersAsync_ObjectGeneric =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertEqualsParameters(p),
  );

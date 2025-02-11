import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertParametersAsync_ObjectDynamic =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.assertParameters(p),
  );

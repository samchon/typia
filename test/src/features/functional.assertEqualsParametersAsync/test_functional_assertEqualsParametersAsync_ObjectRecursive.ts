import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsParametersAsync_ObjectRecursive =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectRecursive",
  )(ObjectRecursive)(
    (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.assertEqualsParameters(p),
  );

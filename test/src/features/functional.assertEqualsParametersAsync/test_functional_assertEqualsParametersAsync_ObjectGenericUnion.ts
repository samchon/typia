import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsParametersAsync_ObjectGenericUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectGenericUnion",
  )(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.assertEqualsParameters(p),
  );

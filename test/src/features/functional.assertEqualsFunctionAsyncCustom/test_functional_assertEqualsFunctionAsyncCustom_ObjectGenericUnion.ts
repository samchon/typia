import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectGenericUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectGenericUnion",
  )(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );

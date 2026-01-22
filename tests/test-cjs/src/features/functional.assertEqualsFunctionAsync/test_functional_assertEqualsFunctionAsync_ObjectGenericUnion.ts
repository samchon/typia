import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsFunctionAsync_ObjectGenericUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectGenericUnion",
    )(ObjectGenericUnion)(
      (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );

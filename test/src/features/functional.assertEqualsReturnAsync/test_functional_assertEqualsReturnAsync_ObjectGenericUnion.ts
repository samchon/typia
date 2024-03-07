import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectGenericUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectGenericUnion",
  )(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.assertEqualsReturn(p),
  );

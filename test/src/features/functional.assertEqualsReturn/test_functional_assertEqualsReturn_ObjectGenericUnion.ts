import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectGenericUnion = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.assertEqualsReturn(p),
)
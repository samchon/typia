import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectGenericUnion = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)
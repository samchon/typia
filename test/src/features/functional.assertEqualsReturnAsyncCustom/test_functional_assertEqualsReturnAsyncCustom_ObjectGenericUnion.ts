import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectGenericUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)
import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectInternal = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.assertEqualsReturn(p),
)
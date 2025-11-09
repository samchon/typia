import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectUnionExplicit = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
    typia.functional.assertEqualsReturn(p),
)
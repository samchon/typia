import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectAlias = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertEqualsFunction(p),
)
import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectGenericAlias = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.assertEqualsFunction(p),
)
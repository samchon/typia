import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateEqualsFunctionAsync_ObjectGeneric = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.validateEqualsFunction(p),
)
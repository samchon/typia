import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateEqualsFunctionAsync_ObjectGenericAlias = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.validateEqualsFunction(p),
)
import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateFunctionAsync_ObjectGenericAlias = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.validateFunction(p),
)
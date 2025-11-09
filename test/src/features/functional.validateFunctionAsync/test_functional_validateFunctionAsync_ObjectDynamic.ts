import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_validateFunctionAsync_ObjectDynamic = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.validateFunction(p),
)
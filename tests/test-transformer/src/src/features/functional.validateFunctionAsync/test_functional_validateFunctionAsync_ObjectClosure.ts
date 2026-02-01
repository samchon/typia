import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateFunctionAsync_ObjectClosure = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.validateFunction(p),
)
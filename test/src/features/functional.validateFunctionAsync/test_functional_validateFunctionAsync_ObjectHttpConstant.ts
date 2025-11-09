import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateFunctionAsync_ObjectHttpConstant = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.validateFunction(p),
)
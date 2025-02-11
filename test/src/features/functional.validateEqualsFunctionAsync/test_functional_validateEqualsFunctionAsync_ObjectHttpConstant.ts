import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsFunctionAsync_ObjectHttpConstant = _test_functional_validateEqualsFunctionAsync(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.validateEqualsFunction(p),
)
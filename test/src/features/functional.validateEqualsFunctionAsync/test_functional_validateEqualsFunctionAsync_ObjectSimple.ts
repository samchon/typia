import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateEqualsFunctionAsync_ObjectSimple = _test_functional_validateEqualsFunctionAsync(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.validateEqualsFunction(p),
)
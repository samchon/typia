import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateFunctionAsync_ObjectSimple = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.validateFunction(p),
)
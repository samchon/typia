import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateFunctionAsync_ObjectJsonTag = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.validateFunction(p),
)
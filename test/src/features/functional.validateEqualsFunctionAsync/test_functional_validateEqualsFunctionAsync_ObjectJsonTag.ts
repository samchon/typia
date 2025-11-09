import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateEqualsFunctionAsync_ObjectJsonTag = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.validateEqualsFunction(p),
)
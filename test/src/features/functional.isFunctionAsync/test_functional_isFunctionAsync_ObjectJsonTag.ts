import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_isFunctionAsync_ObjectJsonTag = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.isFunction(p),
)
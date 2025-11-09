import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateEqualsReturnAsync_ObjectJsonTag = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.validateEqualsReturn(p),
)
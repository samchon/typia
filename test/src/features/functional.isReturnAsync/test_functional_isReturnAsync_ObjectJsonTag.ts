import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_isReturnAsync_ObjectJsonTag = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.isReturn(p),
)
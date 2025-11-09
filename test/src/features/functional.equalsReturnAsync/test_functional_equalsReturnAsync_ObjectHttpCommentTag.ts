import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_equalsReturnAsync_ObjectHttpCommentTag = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectHttpCommentTag"
)(ObjectHttpCommentTag)(
  (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
    typia.functional.equalsReturn(p),
)
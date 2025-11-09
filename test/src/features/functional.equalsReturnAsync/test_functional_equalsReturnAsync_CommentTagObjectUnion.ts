import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_equalsReturnAsync_CommentTagObjectUnion = (): Promise<void> => _test_functional_equalsReturnAsync(
  "CommentTagObjectUnion"
)(CommentTagObjectUnion)(
  (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.equalsReturn(p),
)
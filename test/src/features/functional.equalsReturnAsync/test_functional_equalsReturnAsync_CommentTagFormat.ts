import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_equalsReturnAsync_CommentTagFormat = _test_functional_equalsReturnAsync(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.equalsReturn(p),
)
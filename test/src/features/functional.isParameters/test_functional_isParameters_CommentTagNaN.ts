import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_isParameters_CommentTagNaN = _test_functional_isParameters(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => CommentTagNaN) => typia.functional.isParameters(p),
)
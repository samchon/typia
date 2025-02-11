import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_isParameters_CommentTagLength = _test_functional_isParameters(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.isParameters(p),
)
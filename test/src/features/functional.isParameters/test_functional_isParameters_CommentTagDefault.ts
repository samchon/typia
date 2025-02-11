import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_isParameters_CommentTagDefault = _test_functional_isParameters(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.isParameters(p),
)
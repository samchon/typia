import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_isParameters_CommentTagPattern = _test_functional_isParameters(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => CommentTagPattern) => typia.functional.isParameters(p),
)
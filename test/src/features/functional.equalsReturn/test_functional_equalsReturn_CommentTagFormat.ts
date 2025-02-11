import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_equalsReturn_CommentTagFormat = _test_functional_equalsReturn(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.equalsReturn(p),
)
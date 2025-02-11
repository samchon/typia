import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_isReturn_CommentTagFormat = _test_functional_isReturn(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.isReturn(p),
)
import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateReturn_CommentTagNaN = (): void => _test_functional_validateReturn(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => CommentTagNaN) => typia.functional.validateReturn(p),
)
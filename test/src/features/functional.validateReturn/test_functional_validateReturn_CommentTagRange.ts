import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateReturn_CommentTagRange = (): void => _test_functional_validateReturn(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => CommentTagRange) => typia.functional.validateReturn(p),
)
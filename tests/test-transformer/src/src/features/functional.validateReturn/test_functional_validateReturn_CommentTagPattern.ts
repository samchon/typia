import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateReturn_CommentTagPattern = (): void => _test_functional_validateReturn(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => CommentTagPattern) => typia.functional.validateReturn(p),
)
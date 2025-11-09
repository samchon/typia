import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateReturn_CommentTagDefault = (): void => _test_functional_validateReturn(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.validateReturn(p),
)
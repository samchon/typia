import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_equalsFunctionAsync_CommentTagDefault = _test_functional_equalsFunctionAsync(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.equalsFunction(p),
)
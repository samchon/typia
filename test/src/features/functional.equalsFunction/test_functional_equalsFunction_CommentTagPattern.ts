import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_equalsFunction_CommentTagPattern = (): void => _test_functional_equalsFunction(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => CommentTagPattern) => typia.functional.equalsFunction(p),
)
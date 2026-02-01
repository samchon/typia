import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateFunction_CommentTagInfinite = (): void => _test_functional_validateFunction(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => CommentTagInfinite) => typia.functional.validateFunction(p),
)
import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_isReturn_CommentTagInfinite = (): void => _test_functional_isReturn(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => CommentTagInfinite) => typia.functional.isReturn(p),
)
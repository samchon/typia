import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_equalsParameters_CommentTagInfinite = (): void => _test_functional_equalsParameters(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => CommentTagInfinite) => typia.functional.equalsParameters(p),
)
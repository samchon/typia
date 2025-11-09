import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_equalsParameters_CommentTagObjectUnion = (): void => _test_functional_equalsParameters(
  "CommentTagObjectUnion"
)(CommentTagObjectUnion)(
  (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) => typia.functional.equalsParameters(p),
)
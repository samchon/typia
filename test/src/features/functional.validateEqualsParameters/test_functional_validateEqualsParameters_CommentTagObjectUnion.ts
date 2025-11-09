import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateEqualsParameters_CommentTagObjectUnion = (): void => _test_functional_validateEqualsParameters(
  "CommentTagObjectUnion"
)(CommentTagObjectUnion)(
  (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) => typia.functional.validateEqualsParameters(p),
)
import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_isParameters_CommentTagObjectUnion = (): void => _test_functional_isParameters(
  "CommentTagObjectUnion"
)(CommentTagObjectUnion)(
  (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) => typia.functional.isParameters(p),
)
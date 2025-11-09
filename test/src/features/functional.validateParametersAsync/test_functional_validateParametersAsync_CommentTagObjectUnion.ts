import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateParametersAsync_CommentTagObjectUnion = (): Promise<void> => _test_functional_validateParametersAsync(
  "CommentTagObjectUnion"
)(CommentTagObjectUnion)(
  (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
    typia.functional.validateParameters(p),
)
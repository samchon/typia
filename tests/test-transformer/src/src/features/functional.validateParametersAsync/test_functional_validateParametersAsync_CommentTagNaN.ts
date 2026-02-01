import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateParametersAsync_CommentTagNaN = (): Promise<void> => _test_functional_validateParametersAsync(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.validateParameters(p),
)
import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateParametersAsync_CommentTagRange = (): Promise<void> => _test_functional_validateParametersAsync(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.validateParameters(p),
)
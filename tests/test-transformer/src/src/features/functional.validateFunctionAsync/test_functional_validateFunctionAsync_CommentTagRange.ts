import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateFunctionAsync_CommentTagRange = (): Promise<void> => _test_functional_validateFunctionAsync(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.validateFunction(p),
)
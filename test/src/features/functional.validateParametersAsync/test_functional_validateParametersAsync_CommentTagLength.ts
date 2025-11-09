import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateParametersAsync_CommentTagLength = (): Promise<void> => _test_functional_validateParametersAsync(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.validateParameters(p),
)
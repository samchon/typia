import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateParametersAsync_CommentTagDefault = (): Promise<void> => _test_functional_validateParametersAsync(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.validateParameters(p),
)
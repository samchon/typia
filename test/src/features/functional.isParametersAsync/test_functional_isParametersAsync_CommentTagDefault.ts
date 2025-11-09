import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_isParametersAsync_CommentTagDefault = (): Promise<void> => _test_functional_isParametersAsync(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.isParameters(p),
)
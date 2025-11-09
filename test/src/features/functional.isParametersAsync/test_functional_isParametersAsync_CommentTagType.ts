import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_isParametersAsync_CommentTagType = (): Promise<void> => _test_functional_isParametersAsync(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.isParameters(p),
)
import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateEqualsParametersAsync_CommentTagType = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.validateEqualsParameters(p),
)
import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateEqualsParametersAsync_CommentTagLength = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.validateEqualsParameters(p),
)
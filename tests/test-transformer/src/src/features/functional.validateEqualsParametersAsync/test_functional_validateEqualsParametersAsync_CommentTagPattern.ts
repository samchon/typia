import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateEqualsParametersAsync_CommentTagPattern = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.validateEqualsParameters(p),
)
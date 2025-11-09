import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateEqualsParametersAsync_CommentTagBigInt = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.validateEqualsParameters(p),
)
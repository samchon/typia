import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateParametersAsync_CommentTagBigInt = (): Promise<void> => _test_functional_validateParametersAsync(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.validateParameters(p),
)
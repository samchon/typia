import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateEqualsFunctionAsync_CommentTagLength = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.validateEqualsFunction(p),
)
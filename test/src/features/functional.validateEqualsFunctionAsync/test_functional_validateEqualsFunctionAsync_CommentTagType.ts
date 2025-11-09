import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateEqualsFunctionAsync_CommentTagType = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.validateEqualsFunction(p),
)
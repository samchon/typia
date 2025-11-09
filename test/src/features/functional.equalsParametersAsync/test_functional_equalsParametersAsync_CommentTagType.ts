import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_equalsParametersAsync_CommentTagType = (): Promise<void> => _test_functional_equalsParametersAsync(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.equalsParameters(p),
)
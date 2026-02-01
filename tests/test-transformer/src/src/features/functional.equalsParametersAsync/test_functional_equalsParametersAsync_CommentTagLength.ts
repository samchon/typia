import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_equalsParametersAsync_CommentTagLength = (): Promise<void> => _test_functional_equalsParametersAsync(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.equalsParameters(p),
)
import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_equalsParametersAsync_CommentTagFormat = _test_functional_equalsParametersAsync(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
    typia.functional.equalsParameters(p),
)
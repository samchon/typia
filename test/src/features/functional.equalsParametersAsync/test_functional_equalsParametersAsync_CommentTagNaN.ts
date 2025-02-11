import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_equalsParametersAsync_CommentTagNaN =
  _test_functional_equalsParametersAsync("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.equalsParameters(p),
  );

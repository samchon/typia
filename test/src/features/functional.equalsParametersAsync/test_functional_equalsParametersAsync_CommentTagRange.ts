import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_equalsParametersAsync_CommentTagRange =
  _test_functional_equalsParametersAsync("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.equalsParameters(p),
  );

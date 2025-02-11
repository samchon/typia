import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_equalsParametersAsync_CommentTagPattern =
  _test_functional_equalsParametersAsync("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.equalsParameters(p),
  );

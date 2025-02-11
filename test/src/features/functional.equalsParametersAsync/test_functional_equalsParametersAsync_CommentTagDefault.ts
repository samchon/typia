import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_equalsParametersAsync_CommentTagDefault =
  _test_functional_equalsParametersAsync("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.equalsParameters(p),
  );

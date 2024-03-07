import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_equalsParametersAsync_CommentTagArray =
  _test_functional_equalsParametersAsync("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.equalsParameters(p),
  );

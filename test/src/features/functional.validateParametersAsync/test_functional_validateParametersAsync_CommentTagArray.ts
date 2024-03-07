import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateParametersAsync_CommentTagArray =
  _test_functional_validateParametersAsync("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.validateParameters(p),
  );

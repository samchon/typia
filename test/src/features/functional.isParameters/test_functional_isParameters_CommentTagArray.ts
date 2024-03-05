import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_isParameters_CommentTagArray =
  _test_functional_isParameters("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.isParameters(p),
  );

import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_isReturn_CommentTagArray =
  _test_functional_isReturn("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.isReturn(p),
  );

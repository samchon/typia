import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_isFunction_CommentTagArray =
  _test_functional_isFunction("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.isFunction(p),
  );

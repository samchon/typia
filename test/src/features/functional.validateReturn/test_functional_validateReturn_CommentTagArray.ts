import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateReturn_CommentTagArray =
  _test_functional_validateReturn("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.validateReturn(p),
  );

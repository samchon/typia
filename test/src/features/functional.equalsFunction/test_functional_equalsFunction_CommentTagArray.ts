import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_equalsFunction_CommentTagArray =
  _test_functional_equalsFunction("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => CommentTagArray) =>
      typia.functional.equalsFunction(p),
  );

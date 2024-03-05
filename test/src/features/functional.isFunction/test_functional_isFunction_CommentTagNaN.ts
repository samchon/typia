import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_isFunction_CommentTagNaN =
  _test_functional_isFunction("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.isFunction(p),
  );

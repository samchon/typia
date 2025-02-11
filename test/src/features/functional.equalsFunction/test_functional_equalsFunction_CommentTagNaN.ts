import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_equalsFunction_CommentTagNaN =
  _test_functional_equalsFunction("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.equalsFunction(p),
  );

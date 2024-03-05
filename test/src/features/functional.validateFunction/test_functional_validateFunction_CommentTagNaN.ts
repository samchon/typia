import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateFunction_CommentTagNaN =
  _test_functional_validateFunction("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.validateFunction(p),
  );

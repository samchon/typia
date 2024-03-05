import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateEqualsFunction_CommentTagNaN =
  _test_functional_validateEqualsFunction("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.validateEqualsFunction(p),
  );

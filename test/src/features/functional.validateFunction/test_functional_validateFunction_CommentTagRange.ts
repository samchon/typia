import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateFunction_CommentTagRange =
  _test_functional_validateFunction("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.validateFunction(p),
  );

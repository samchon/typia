import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_equalsFunction_CommentTagRange =
  _test_functional_equalsFunction("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.equalsFunction(p),
  );

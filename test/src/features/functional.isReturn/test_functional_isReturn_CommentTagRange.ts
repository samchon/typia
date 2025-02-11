import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_isReturn_CommentTagRange =
  _test_functional_isReturn("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.isReturn(p),
  );

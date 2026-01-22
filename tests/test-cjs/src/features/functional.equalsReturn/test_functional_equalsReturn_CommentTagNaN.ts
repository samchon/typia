import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_equalsReturn_CommentTagNaN = (): void =>
  _test_functional_equalsReturn("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.equalsReturn(p),
  );

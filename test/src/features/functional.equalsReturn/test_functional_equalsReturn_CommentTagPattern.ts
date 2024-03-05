import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_equalsReturn_CommentTagPattern =
  _test_functional_equalsReturn("CommentTagPattern")(CommentTagPattern)(
    (p: (input: CommentTagPattern) => CommentTagPattern) =>
      typia.functional.equalsReturn(p),
  );

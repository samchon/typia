import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateEqualsReturn_CommentTagPattern =
  _test_functional_validateEqualsReturn("CommentTagPattern")(CommentTagPattern)(
    (p: (input: CommentTagPattern) => CommentTagPattern) =>
      typia.functional.validateEqualsReturn(p),
  );

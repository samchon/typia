import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateEqualsReturn_CommentTagLength =
  _test_functional_validateEqualsReturn("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.validateEqualsReturn(p),
  );

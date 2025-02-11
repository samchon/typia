import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsReturn_CommentTagNaN =
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => CommentTagNaN) =>
    typia.functional.assertEqualsReturn(p),
  );

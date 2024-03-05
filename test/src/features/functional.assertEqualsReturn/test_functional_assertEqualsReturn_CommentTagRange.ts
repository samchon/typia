import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsReturn_CommentTagRange =
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => CommentTagRange) =>
    typia.functional.assertEqualsReturn(p),
  );

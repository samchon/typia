import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsReturn_CommentTagPattern =
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => CommentTagPattern) =>
    typia.functional.assertEqualsReturn(p),
  );

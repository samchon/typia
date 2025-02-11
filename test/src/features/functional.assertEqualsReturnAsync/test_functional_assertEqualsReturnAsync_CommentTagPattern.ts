import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_CommentTagPattern = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertEqualsReturn(p),
)
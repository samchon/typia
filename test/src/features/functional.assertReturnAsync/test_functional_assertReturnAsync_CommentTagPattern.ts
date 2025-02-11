import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_CommentTagPattern = _test_functional_assertReturnAsync(TypeGuardError)(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertReturn(p),
)
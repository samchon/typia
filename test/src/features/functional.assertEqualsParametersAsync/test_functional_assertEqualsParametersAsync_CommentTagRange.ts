import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_CommentTagRange = _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertEqualsParameters(p),
)
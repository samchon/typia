import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsParametersAsync_CommentTagNaN =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertEqualsParameters(p),
  );

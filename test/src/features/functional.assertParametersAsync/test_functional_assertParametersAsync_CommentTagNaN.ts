import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertParametersAsync_CommentTagNaN =
  _test_functional_assertParametersAsync(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertParameters(p),
  );

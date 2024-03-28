import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertParametersAsync_CommentTagRange =
  _test_functional_assertParametersAsync(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertParameters(p),
  );

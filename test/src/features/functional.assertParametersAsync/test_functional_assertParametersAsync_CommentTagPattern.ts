import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertParametersAsync_CommentTagPattern =
  _test_functional_assertParametersAsync(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertParameters(p),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertParametersAsync_CommentTagInfinite =
  _test_functional_assertParametersAsync(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertParameters(p),
  );

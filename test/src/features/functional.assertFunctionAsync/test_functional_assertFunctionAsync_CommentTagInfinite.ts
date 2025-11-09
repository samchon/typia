import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertFunctionAsync_CommentTagInfinite =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
      typia.functional.assertFunction(p),
    );

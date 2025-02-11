import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertReturnAsync_CommentTagInfinite =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertReturn(p),
  );

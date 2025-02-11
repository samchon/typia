import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_assertReturnAsyncCustom_CommentTagInfinite =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

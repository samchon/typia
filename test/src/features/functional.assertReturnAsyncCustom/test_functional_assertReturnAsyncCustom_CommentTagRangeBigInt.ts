import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertReturnAsyncCustom_CommentTagRangeBigInt =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

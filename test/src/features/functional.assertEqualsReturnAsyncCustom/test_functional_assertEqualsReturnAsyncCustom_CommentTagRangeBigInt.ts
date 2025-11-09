import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );

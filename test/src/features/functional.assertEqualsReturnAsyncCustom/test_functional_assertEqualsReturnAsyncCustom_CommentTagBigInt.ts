import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagBigInt =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagBigInt",
  )(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );

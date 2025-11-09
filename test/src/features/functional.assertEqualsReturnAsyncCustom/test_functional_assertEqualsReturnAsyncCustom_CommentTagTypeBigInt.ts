import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "CommentTagTypeBigInt",
    )(CommentTagTypeBigInt)(
      (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );

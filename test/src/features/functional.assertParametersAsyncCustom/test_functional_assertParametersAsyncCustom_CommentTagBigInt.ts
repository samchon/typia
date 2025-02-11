import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertParametersAsyncCustom_CommentTagBigInt =
  _test_functional_assertParametersAsync(CustomGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

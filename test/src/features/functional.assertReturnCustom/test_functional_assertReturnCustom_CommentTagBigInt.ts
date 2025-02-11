import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertReturnCustom_CommentTagBigInt =
  _test_functional_assertReturn(CustomGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

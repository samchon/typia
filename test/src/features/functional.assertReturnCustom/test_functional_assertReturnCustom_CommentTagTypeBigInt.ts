import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_CommentTagTypeBigInt =
  _test_functional_assertReturn(CustomGuardError)("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

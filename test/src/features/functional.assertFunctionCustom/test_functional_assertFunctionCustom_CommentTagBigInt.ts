import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertFunctionCustom_CommentTagBigInt = (): void =>
  _test_functional_assertFunction(CustomGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );

import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsFunctionCustom_CommentTagBigInt =
  _test_functional_assertEqualsFunction(CustomGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );

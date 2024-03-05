import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertReturn_CommentTagRangeBigInt =
  _test_functional_assertReturn(TypeGuardError)("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
    typia.functional.assertReturn(p),
  );

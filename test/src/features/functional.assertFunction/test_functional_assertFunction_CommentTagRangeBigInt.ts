import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertFunction_CommentTagRangeBigInt = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
    typia.functional.assertFunction(p),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertFunction_CommentTagBigInt = (): void =>
  _test_functional_assertFunction(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertFunction(p),
  );

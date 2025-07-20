import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsReturn_CommentTagBigInt = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertEqualsReturn(p),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertReturn_CommentTagBigInt = (): void =>
  _test_functional_assertReturn(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertReturn(p),
  );

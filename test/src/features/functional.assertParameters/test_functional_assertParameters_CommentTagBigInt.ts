import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertParameters_CommentTagBigInt =
  _test_functional_assertParameters(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertParameters(p),
  );

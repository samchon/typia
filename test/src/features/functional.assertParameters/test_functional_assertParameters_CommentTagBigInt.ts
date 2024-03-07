import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_CommentTagBigInt =
  _test_functional_assertParameters(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
    typia.functional.assertParameters(p),
  );

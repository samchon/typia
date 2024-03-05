import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertParameters_CommentTagTypeBigInt =
  _test_functional_assertParameters(TypeGuardError)("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
    typia.functional.assertParameters(p),
  );

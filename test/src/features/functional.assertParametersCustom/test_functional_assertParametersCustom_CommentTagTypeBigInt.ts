import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_CommentTagTypeBigInt =
  _test_functional_assertParameters(CustomGuardError)("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );

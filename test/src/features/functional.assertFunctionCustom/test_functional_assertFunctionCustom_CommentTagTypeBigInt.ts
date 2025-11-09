import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertFunctionCustom_CommentTagTypeBigInt =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );

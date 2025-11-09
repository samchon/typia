import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertParametersCustom_CommentTagTypeBigInt =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("CommentTagTypeBigInt")(
      CommentTagTypeBigInt,
    )((p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );

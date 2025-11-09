import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertParametersCustom_CommentTagBigInt =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );

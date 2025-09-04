import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertParametersCustom_CommentTagRangeBigInt =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );

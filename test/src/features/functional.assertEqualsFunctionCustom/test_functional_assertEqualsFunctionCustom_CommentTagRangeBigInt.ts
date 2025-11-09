import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsFunctionCustom_CommentTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );

import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_CommentTagRangeBigInt =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "CommentTagRangeBigInt",
  )(CommentTagRangeBigInt)(
    (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );

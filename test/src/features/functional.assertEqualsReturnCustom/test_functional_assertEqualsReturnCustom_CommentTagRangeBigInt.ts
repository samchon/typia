import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsReturnCustom_CommentTagRangeBigInt =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "CommentTagRangeBigInt",
  )(CommentTagRangeBigInt)(
    (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsReturn_CommentTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
        typia.functional.assertEqualsReturn(p),
    );

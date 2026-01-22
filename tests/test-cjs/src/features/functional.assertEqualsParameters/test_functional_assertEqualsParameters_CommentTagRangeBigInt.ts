import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsParameters_CommentTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
        typia.functional.assertEqualsParameters(p),
    );

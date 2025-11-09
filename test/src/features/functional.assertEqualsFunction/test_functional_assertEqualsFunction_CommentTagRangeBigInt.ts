import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsFunction_CommentTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) =>
        typia.functional.assertEqualsFunction(p),
    );

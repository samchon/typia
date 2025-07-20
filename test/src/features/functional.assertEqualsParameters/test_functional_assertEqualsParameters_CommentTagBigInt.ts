import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsParameters_CommentTagBigInt =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.assertEqualsParameters(p),
    );

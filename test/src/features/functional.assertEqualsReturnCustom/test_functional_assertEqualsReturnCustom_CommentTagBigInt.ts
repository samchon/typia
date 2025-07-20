import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsReturnCustom_CommentTagBigInt =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );

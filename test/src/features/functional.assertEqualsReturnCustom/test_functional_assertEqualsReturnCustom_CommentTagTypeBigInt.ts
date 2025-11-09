import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertEqualsReturnCustom_CommentTagTypeBigInt =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "CommentTagTypeBigInt",
    )(CommentTagTypeBigInt)(
      (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );

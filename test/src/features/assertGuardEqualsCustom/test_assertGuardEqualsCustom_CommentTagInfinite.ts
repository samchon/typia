import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertGuardEqualsCustom_CommentTagInfinite = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)((input) =>
    typia.assertGuardEquals<CommentTagInfinite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );

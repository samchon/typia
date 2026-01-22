import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertGuardEqualsCustom_CommentTagInfinite = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)(
    typia.createAssertGuardEquals<CommentTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
  );

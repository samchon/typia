import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertGuardEqualsCustom_CommentTagPattern = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.assertGuardEquals<CommentTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );

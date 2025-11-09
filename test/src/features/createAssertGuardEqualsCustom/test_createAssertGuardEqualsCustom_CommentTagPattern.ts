import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertGuardEqualsCustom_CommentTagPattern = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)(
    typia.createAssertGuardEquals<CommentTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );

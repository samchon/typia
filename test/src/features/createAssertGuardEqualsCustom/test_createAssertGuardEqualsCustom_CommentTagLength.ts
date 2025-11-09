import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertGuardEqualsCustom_CommentTagLength = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)(
    typia.createAssertGuardEquals<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );

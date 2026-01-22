import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assertGuardEqualsCustom_CommentTagLength = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.assertGuardEquals<CommentTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );

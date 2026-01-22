import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_assertGuardEqualsCustom_CommentTagFormat = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)((input) =>
    typia.assertGuardEquals<CommentTagFormat>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );

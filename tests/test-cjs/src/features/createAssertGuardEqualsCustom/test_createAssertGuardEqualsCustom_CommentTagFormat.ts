import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertGuardEqualsCustom_CommentTagFormat = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.createAssertGuardEquals<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );

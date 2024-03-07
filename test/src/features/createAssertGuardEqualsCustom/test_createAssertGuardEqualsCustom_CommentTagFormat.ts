import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_CommentTagFormat =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.createAssertGuardEquals<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );

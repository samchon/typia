import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertEqualsCustom_CommentTagFormat =
  _test_assertEquals(CustomGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createAssertEquals<CommentTagFormat>((p) => new CustomGuardError(p)));

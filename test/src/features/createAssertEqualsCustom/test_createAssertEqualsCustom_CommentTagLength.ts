import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertEqualsCustom_CommentTagLength =
  _test_assertEquals(CustomGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.createAssertEquals<CommentTagLength>((p) => new CustomGuardError(p)));

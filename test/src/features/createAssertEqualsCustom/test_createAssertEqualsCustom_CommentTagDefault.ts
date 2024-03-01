import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertEqualsCustom_CommentTagDefault =
  _test_assertEquals(CustomGuardError)("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(
    typia.createAssertEquals<CommentTagDefault>((p) => new CustomGuardError(p)),
  );

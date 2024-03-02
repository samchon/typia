import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertEqualsCustom_CommentTagPattern =
  _test_assertEquals(CustomGuardError)("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(
    typia.createAssertEquals<CommentTagPattern>((p) => new CustomGuardError(p)),
  );

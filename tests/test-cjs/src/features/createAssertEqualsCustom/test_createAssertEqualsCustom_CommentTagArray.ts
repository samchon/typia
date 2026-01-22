import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createAssertEqualsCustom_CommentTagArray = (): void =>
  _test_assertEquals(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(typia.createAssertEquals<CommentTagArray>((p) => new CustomGuardError(p)));

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertEquals_CommentTagPattern = (): void =>
  _test_assertEquals(TypeGuardError)("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.assertEquals<CommentTagPattern>(input));

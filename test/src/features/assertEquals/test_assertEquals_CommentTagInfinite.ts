import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertEquals_CommentTagInfinite = (): void =>
  _test_assertEquals(TypeGuardError)("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )((input) => typia.assertEquals<CommentTagInfinite>(input));

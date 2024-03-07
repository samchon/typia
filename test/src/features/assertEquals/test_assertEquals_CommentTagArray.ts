import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_assertEquals_CommentTagArray = _test_assertEquals(
  TypeGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
  typia.assertEquals<CommentTagArray>(input),
);

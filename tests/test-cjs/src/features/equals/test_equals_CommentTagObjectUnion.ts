import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_equals_CommentTagObjectUnion = (): void =>
  _test_equals("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.equals<CommentTagObjectUnion>(input));

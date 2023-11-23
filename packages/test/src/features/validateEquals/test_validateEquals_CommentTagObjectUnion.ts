import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_validateEquals_CommentTagObjectUnion = _test_validateEquals(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
  typia.validateEquals<CommentTagObjectUnion>(input),
);

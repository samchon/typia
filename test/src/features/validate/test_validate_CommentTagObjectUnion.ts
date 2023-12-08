import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_validate_CommentTagObjectUnion = _test_validate(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
  typia.validate<CommentTagObjectUnion>(input),
);

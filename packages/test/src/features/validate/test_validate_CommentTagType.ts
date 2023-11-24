import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_validate_CommentTagType = _test_validate(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.validate<CommentTagType>(input),
);

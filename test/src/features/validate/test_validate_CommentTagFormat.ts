import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_validate_CommentTagFormat = _test_validate(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.validate<CommentTagFormat>(input),
);

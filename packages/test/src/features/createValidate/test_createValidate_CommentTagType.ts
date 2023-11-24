import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createValidate_CommentTagType = _test_validate(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.createValidate<CommentTagType>());

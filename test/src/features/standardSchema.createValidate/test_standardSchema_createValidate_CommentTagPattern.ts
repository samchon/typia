import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_standardSchema_createValidate_CommentTagPattern =
  _test_standardSchema_validate("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.createValidate<CommentTagPattern>());

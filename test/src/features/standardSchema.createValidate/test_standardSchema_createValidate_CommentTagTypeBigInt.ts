import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_standardSchema_createValidate_CommentTagTypeBigInt =
  _test_standardSchema_validate("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )(typia.createValidate<CommentTagTypeBigInt>());

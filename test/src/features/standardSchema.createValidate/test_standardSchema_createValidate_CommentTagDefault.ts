import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_standardSchema_createValidate_CommentTagDefault = (): void =>
  _test_standardSchema_validate("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.createValidate<CommentTagDefault>());

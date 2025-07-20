import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_standardSchema_createValidate_CommentTagFormat = (): void =>
  _test_standardSchema_validate("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createValidate<CommentTagFormat>());

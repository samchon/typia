import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createValidateEquals_CommentTagDefault = (): void =>
  _test_validateEquals("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.createValidateEquals<CommentTagDefault>());

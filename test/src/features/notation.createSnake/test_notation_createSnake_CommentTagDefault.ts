import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_createValidateSnake_CommentTagDefault =
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.SnakeCase<CommentTagDefault>>({
    convert: typia.notations.createValidateSnake<CommentTagDefault>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagDefault>>(),
  });

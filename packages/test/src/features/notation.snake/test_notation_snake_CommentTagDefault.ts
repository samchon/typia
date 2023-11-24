import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_validateSnake_CommentTagDefault =
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.SnakeCase<CommentTagDefault>>({
    convert: (input) => typia.notations.validateSnake<CommentTagDefault>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagDefault>>(),
  });

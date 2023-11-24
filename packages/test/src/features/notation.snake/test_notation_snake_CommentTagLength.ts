import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_validateSnake_CommentTagLength =
  _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )<typia.SnakeCase<CommentTagLength>>({
    convert: (input) => typia.notations.validateSnake<CommentTagLength>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagLength>>(),
  });

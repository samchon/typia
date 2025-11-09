import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_createValidateSnake_CommentTagLength = (): void =>
    _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
        CommentTagLength
  )<typia.SnakeCase<CommentTagLength>>({
    convert: typia.notations.createValidateSnake<CommentTagLength>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagLength>>(),
  });

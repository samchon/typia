import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_notation_createValidateSnake_CommentTagPattern = (): void =>
  _test_notation_validateGeneral("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )<typia.SnakeCase<CommentTagPattern>>({
    convert: typia.notations.createValidateSnake<CommentTagPattern>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagPattern>>(),
  });

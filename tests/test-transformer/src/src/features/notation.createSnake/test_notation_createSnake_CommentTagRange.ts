import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_createValidateSnake_CommentTagRange = (): void =>
    _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
        CommentTagRange
  )<typia.SnakeCase<CommentTagRange>>({
    convert: typia.notations.createValidateSnake<CommentTagRange>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagRange>>(),
  });

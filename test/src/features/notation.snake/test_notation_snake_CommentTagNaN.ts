import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_validateSnake_CommentTagNaN = (): void =>
    _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(
        CommentTagNaN
  )<typia.SnakeCase<CommentTagNaN>>({
    convert: (input) => typia.notations.validateSnake<CommentTagNaN>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagNaN>>(),
  });

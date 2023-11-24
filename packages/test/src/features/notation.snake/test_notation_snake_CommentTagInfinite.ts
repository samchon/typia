import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_notation_validateSnake_CommentTagInfinite =
  _test_notation_validateGeneral("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )<typia.SnakeCase<CommentTagInfinite>>({
    convert: (input) =>
      typia.notations.validateSnake<CommentTagInfinite>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagInfinite>>(),
  });

import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_notation_createValidateSnake_CommentTagInfinite = (): void =>
    _test_notation_validateGeneral("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite
  )<typia.SnakeCase<CommentTagInfinite>>({
    convert: typia.notations.createValidateSnake<CommentTagInfinite>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagInfinite>>(),
  });

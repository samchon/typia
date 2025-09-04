import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_createValidateSnake_CommentTagNaN = (): void =>
  _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)<
    typia.SnakeCase<CommentTagNaN>
  >({
    convert: typia.notations.createValidateSnake<CommentTagNaN>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagNaN>>(),
  });

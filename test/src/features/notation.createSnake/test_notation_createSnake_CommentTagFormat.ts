import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_createValidateSnake_CommentTagFormat = (): void =>
    _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat
  )<typia.SnakeCase<CommentTagFormat>>({
    convert: typia.notations.createValidateSnake<CommentTagFormat>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagFormat>>(),
  });

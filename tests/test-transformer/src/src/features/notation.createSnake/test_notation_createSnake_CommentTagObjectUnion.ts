import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_createValidateSnake_CommentTagObjectUnion = (): void =>
    _test_notation_validateGeneral("CommentTagObjectUnion")<CommentTagObjectUnion>(
        CommentTagObjectUnion
  )<typia.SnakeCase<CommentTagObjectUnion>>({
    convert: typia.notations.createValidateSnake<CommentTagObjectUnion>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagObjectUnion>>(),
  });

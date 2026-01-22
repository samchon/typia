import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_validateSnake_CommentTagObjectUnion = (): void =>
  _test_notation_validateGeneral(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)<
    typia.SnakeCase<CommentTagObjectUnion>
  >({
    convert: (input) =>
      typia.notations.validateSnake<CommentTagObjectUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagObjectUnion>>(),
  });

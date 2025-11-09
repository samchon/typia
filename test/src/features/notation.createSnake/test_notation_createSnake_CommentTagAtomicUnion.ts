import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_createValidateSnake_CommentTagAtomicUnion =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)<
      typia.SnakeCase<CommentTagAtomicUnion>
    >({
      convert: typia.notations.createValidateSnake<CommentTagAtomicUnion>(),
      assert: typia.createAssert<typia.SnakeCase<CommentTagAtomicUnion>>(),
    });

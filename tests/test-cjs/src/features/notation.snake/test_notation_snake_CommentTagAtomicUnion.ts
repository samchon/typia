import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_validateSnake_CommentTagAtomicUnion = (): void =>
  _test_notation_validateGeneral(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)<
    typia.SnakeCase<CommentTagAtomicUnion>
  >({
    convert: (input) =>
      typia.notations.validateSnake<CommentTagAtomicUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagAtomicUnion>>(),
  });

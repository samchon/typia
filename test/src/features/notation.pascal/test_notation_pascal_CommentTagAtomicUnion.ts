import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_validatePascal_CommentTagAtomicUnion =
  _test_notation_validateGeneral(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)<
    typia.PascalCase<CommentTagAtomicUnion>
  >({
    convert: (input) =>
      typia.notations.validatePascal<CommentTagAtomicUnion>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagAtomicUnion>>(),
  });

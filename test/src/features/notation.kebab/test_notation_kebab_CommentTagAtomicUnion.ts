import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_validateKebab_CommentTagAtomicUnion = (): void =>
  _test_notation_validateGeneral(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)<
    typia.KebabCase<CommentTagAtomicUnion>
  >({
    convert: (input) =>
      typia.notations.validateKebab<CommentTagAtomicUnion>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagAtomicUnion>>(),
  });

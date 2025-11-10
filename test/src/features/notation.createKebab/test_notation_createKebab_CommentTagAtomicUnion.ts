import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_createValidateKebab_CommentTagAtomicUnion =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)<
      typia.KebabCase<CommentTagAtomicUnion>
    >({
      convert: typia.notations.createValidateKebab<CommentTagAtomicUnion>(),
      assert: typia.createAssert<typia.KebabCase<CommentTagAtomicUnion>>(),
    });

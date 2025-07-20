import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_createValidateCamel_CommentTagAtomicUnion =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)<
      typia.CamelCase<CommentTagAtomicUnion>
    >({
      convert: typia.notations.createValidateCamel<CommentTagAtomicUnion>(),
      assert: typia.createAssert<typia.CamelCase<CommentTagAtomicUnion>>(),
    });

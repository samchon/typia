import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_createValidatePascal_CommentTagDefault = (): void =>
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.PascalCase<CommentTagDefault>>({
    convert: typia.notations.createValidatePascal<CommentTagDefault>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagDefault>>(),
  });

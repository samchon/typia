import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_createValidateKebab_CommentTagDefault = (): void =>
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.KebabCase<CommentTagDefault>>({
    convert: typia.notations.createValidateKebab<CommentTagDefault>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagDefault>>(),
  });

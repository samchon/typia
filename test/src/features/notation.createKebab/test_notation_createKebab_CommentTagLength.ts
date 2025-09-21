import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_createValidateKebab_CommentTagLength = (): void =>
  _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )<typia.KebabCase<CommentTagLength>>({
    convert: typia.notations.createValidateKebab<CommentTagLength>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagLength>>(),
  });

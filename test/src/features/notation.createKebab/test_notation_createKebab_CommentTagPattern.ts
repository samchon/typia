import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_notation_createValidateKebab_CommentTagPattern = (): void =>
  _test_notation_validateGeneral("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )<typia.KebabCase<CommentTagPattern>>({
    convert: typia.notations.createValidateKebab<CommentTagPattern>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagPattern>>(),
  });

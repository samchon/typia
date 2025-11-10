import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_createValidateKebab_CommentTagRange = (): void =>
  _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )<typia.KebabCase<CommentTagRange>>({
    convert: typia.notations.createValidateKebab<CommentTagRange>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagRange>>(),
  });

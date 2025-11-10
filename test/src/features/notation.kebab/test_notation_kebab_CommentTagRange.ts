import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_validateKebab_CommentTagRange = (): void =>
  _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )<typia.KebabCase<CommentTagRange>>({
    convert: (input) => typia.notations.validateKebab<CommentTagRange>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagRange>>(),
  });

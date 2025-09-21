import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_notation_validateKebab_CommentTagPattern = (): void =>
  _test_notation_validateGeneral("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )<typia.KebabCase<CommentTagPattern>>({
    convert: (input) => typia.notations.validateKebab<CommentTagPattern>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagPattern>>(),
  });

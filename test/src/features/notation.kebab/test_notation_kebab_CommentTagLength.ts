import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_validateKebab_CommentTagLength = (): void =>
  _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )<typia.KebabCase<CommentTagLength>>({
    convert: (input) => typia.notations.validateKebab<CommentTagLength>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagLength>>(),
  });

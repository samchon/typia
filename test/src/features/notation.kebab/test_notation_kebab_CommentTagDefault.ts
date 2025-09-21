import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_validateKebab_CommentTagDefault = (): void =>
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.KebabCase<CommentTagDefault>>({
    convert: (input) => typia.notations.validateKebab<CommentTagDefault>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagDefault>>(),
  });

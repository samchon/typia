import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_validateKebab_CommentTagType = (): void =>
  _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
    CommentTagType,
  )<typia.KebabCase<CommentTagType>>({
    convert: (input) => typia.notations.validateKebab<CommentTagType>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagType>>(),
  });

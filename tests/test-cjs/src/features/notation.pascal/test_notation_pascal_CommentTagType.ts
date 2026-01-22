import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_validatePascal_CommentTagType = (): void =>
  _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
    CommentTagType,
  )<typia.PascalCase<CommentTagType>>({
    convert: (input) => typia.notations.validatePascal<CommentTagType>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagType>>(),
  });

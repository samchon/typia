import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_createValidatePascal_CommentTagLength =
  _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )<typia.PascalCase<CommentTagLength>>({
    convert: typia.notations.createValidatePascal<CommentTagLength>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagLength>>(),
  });

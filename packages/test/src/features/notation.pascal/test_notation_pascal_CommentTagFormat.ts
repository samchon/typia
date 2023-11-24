import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_validatePascal_CommentTagFormat =
  _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )<typia.PascalCase<CommentTagFormat>>({
    convert: (input) => typia.notations.validatePascal<CommentTagFormat>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagFormat>>(),
  });

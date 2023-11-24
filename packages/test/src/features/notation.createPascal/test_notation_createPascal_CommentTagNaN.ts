import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_createValidatePascal_CommentTagNaN =
  _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)<
    typia.PascalCase<CommentTagNaN>
  >({
    convert: typia.notations.createValidatePascal<CommentTagNaN>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagNaN>>(),
  });

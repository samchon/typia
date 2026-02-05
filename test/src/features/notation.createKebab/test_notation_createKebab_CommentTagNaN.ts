import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_createValidateKebab_CommentTagNaN = (): void =>
  _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)<
    typia.KebabCase<CommentTagNaN>
  >({
    convert: typia.notations.createValidateKebab<CommentTagNaN>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagNaN>>(),
  });

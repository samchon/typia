import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_validateKebab_CommentTagNaN = (): void =>
  _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)<
    typia.KebabCase<CommentTagNaN>
  >({
    convert: (input) => typia.notations.validateKebab<CommentTagNaN>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagNaN>>(),
  });

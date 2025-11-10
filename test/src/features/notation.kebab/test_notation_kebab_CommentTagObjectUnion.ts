import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_validateKebab_CommentTagObjectUnion = (): void =>
  _test_notation_validateGeneral(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)<
    typia.KebabCase<CommentTagObjectUnion>
  >({
    convert: (input) =>
      typia.notations.validateKebab<CommentTagObjectUnion>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagObjectUnion>>(),
  });

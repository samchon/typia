import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_createValidateKebab_CommentTagObjectUnion =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagObjectUnion",
    )<CommentTagObjectUnion>(CommentTagObjectUnion)<
      typia.KebabCase<CommentTagObjectUnion>
    >({
      convert: typia.notations.createValidateKebab<CommentTagObjectUnion>(),
      assert: typia.createAssert<typia.KebabCase<CommentTagObjectUnion>>(),
    });

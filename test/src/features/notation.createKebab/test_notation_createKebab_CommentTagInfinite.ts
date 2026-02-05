import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_notation_createValidateKebab_CommentTagInfinite = (): void =>
  _test_notation_validateGeneral("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )<typia.KebabCase<CommentTagInfinite>>({
    convert: typia.notations.createValidateKebab<CommentTagInfinite>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagInfinite>>(),
  });

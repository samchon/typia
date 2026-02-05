import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_createValidateKebab_CommentTagFormat = (): void =>
  _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )<typia.KebabCase<CommentTagFormat>>({
    convert: typia.notations.createValidateKebab<CommentTagFormat>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagFormat>>(),
  });

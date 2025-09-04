import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_createValidatePascal_CommentTagFormat = (): void =>
  _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )<typia.PascalCase<CommentTagFormat>>({
    convert: typia.notations.createValidatePascal<CommentTagFormat>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagFormat>>(),
  });

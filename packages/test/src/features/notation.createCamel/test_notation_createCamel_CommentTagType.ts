import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_createValidateCamel_CommentTagType =
  _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
    CommentTagType,
  )<typia.CamelCase<CommentTagType>>({
    convert: typia.notations.createValidateCamel<CommentTagType>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagType>>(),
  });

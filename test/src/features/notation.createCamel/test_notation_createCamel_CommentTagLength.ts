import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_createValidateCamel_CommentTagLength = (): void =>
    _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
        CommentTagLength
  )<typia.CamelCase<CommentTagLength>>({
    convert: typia.notations.createValidateCamel<CommentTagLength>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagLength>>(),
  });

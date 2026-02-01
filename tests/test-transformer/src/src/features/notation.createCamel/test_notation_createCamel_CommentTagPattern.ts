import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_notation_createValidateCamel_CommentTagPattern = (): void =>
    _test_notation_validateGeneral("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern
  )<typia.CamelCase<CommentTagPattern>>({
    convert: typia.notations.createValidateCamel<CommentTagPattern>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagPattern>>(),
  });

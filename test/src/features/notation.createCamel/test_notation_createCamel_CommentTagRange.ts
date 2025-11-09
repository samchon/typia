import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_createValidateCamel_CommentTagRange = (): void =>
    _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
        CommentTagRange
  )<typia.CamelCase<CommentTagRange>>({
    convert: typia.notations.createValidateCamel<CommentTagRange>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagRange>>(),
  });

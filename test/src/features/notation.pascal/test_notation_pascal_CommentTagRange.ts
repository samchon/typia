import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_validatePascal_CommentTagRange = (): void =>
    _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
        CommentTagRange
  )<typia.PascalCase<CommentTagRange>>({
    convert: (input) => typia.notations.validatePascal<CommentTagRange>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagRange>>(),
  });

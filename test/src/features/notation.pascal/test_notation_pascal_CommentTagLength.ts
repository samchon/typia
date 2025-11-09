import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_validatePascal_CommentTagLength = (): void =>
    _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
        CommentTagLength
  )<typia.PascalCase<CommentTagLength>>({
    convert: (input) => typia.notations.validatePascal<CommentTagLength>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagLength>>(),
  });

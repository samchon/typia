import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_notation_validatePascal_CommentTagRangeBigInt = (): void =>
    _test_notation_validateGeneral("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt
  )<typia.PascalCase<CommentTagRangeBigInt>>({
    convert: (input) => typia.notations.validatePascal<CommentTagRangeBigInt>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagRangeBigInt>>(),
  });

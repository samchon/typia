import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_validatePascal_CommentTagBigInt = (): void =>
    _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt
  )<typia.PascalCase<CommentTagBigInt>>({
    convert: (input) => typia.notations.validatePascal<CommentTagBigInt>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagBigInt>>(),
  });

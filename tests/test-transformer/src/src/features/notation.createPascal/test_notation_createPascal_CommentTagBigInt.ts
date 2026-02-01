import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_createValidatePascal_CommentTagBigInt = (): void =>
    _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt
  )<typia.PascalCase<CommentTagBigInt>>({
    convert: typia.notations.createValidatePascal<CommentTagBigInt>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagBigInt>>(),
  });

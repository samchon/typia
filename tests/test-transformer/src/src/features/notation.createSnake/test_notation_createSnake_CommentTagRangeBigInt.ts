import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_notation_createValidateSnake_CommentTagRangeBigInt = (): void =>
    _test_notation_validateGeneral("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt
  )<typia.SnakeCase<CommentTagRangeBigInt>>({
    convert: typia.notations.createValidateSnake<CommentTagRangeBigInt>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagRangeBigInt>>(),
  });

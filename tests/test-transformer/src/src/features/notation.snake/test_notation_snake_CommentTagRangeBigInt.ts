import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_notation_validateSnake_CommentTagRangeBigInt = (): void =>
    _test_notation_validateGeneral("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt
  )<typia.SnakeCase<CommentTagRangeBigInt>>({
    convert: (input) => typia.notations.validateSnake<CommentTagRangeBigInt>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagRangeBigInt>>(),
  });

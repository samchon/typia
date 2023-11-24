import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_validateSnake_CommentTagTypeBigInt =
  _test_notation_validateGeneral("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )<typia.SnakeCase<CommentTagTypeBigInt>>({
    convert: (input) =>
      typia.notations.validateSnake<CommentTagTypeBigInt>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagTypeBigInt>>(),
  });

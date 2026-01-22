import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_createValidateSnake_CommentTagTypeBigInt =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagTypeBigInt",
    )<CommentTagTypeBigInt>(CommentTagTypeBigInt)<
      typia.SnakeCase<CommentTagTypeBigInt>
    >({
      convert: typia.notations.createValidateSnake<CommentTagTypeBigInt>(),
      assert: typia.createAssert<typia.SnakeCase<CommentTagTypeBigInt>>(),
    });

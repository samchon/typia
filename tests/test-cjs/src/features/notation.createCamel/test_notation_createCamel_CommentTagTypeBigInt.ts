import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_createValidateCamel_CommentTagTypeBigInt =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagTypeBigInt",
    )<CommentTagTypeBigInt>(CommentTagTypeBigInt)<
      typia.CamelCase<CommentTagTypeBigInt>
    >({
      convert: typia.notations.createValidateCamel<CommentTagTypeBigInt>(),
      assert: typia.createAssert<typia.CamelCase<CommentTagTypeBigInt>>(),
    });

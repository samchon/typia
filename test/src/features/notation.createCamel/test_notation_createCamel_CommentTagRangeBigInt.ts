import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_notation_createValidateCamel_CommentTagRangeBigInt =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagRangeBigInt",
    )<CommentTagRangeBigInt>(CommentTagRangeBigInt)<
      typia.CamelCase<CommentTagRangeBigInt>
    >({
      convert: typia.notations.createValidateCamel<CommentTagRangeBigInt>(),
      assert: typia.createAssert<typia.CamelCase<CommentTagRangeBigInt>>(),
    });

import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_createValidatePascal_CommentTagTypeBigInt =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagTypeBigInt",
    )<CommentTagTypeBigInt>(CommentTagTypeBigInt)<
      typia.PascalCase<CommentTagTypeBigInt>
    >({
      convert: typia.notations.createValidatePascal<CommentTagTypeBigInt>(),
      assert: typia.createAssert<typia.PascalCase<CommentTagTypeBigInt>>(),
    });

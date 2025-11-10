import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_createValidateKebab_CommentTagTypeBigInt =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagTypeBigInt",
    )<CommentTagTypeBigInt>(CommentTagTypeBigInt)<
      typia.KebabCase<CommentTagTypeBigInt>
    >({
      convert: typia.notations.createValidateKebab<CommentTagTypeBigInt>(),
      assert: typia.createAssert<typia.KebabCase<CommentTagTypeBigInt>>(),
    });

import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_notation_createValidateKebab_CommentTagRangeBigInt =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagRangeBigInt",
    )<CommentTagRangeBigInt>(CommentTagRangeBigInt)<
      typia.KebabCase<CommentTagRangeBigInt>
    >({
      convert: typia.notations.createValidateKebab<CommentTagRangeBigInt>(),
      assert: typia.createAssert<typia.KebabCase<CommentTagRangeBigInt>>(),
    });

import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_standardSchema_createValidate_CommentTagRangeBigInt =
  (): void =>
    _test_standardSchema_validate(
      "CommentTagRangeBigInt",
    )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
      typia.createValidate<CommentTagRangeBigInt>(),
    );

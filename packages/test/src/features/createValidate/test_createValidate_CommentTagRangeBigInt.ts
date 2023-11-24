import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createValidate_CommentTagRangeBigInt = _test_validate(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  typia.createValidate<CommentTagRangeBigInt>(),
);

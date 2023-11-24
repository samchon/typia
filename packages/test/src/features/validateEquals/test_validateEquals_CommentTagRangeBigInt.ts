import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_validateEquals_CommentTagRangeBigInt = _test_validateEquals(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
  typia.validateEquals<CommentTagRangeBigInt>(input),
);

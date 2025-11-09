import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assertEquals_CommentTagRangeBigInt = (): void =>
  _test_assertEquals(TypeGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
    typia.assertEquals<CommentTagRangeBigInt>(input),
  );

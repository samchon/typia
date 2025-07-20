import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_prune_CommentTagTypeBigInt = (): void =>
  _test_misc_prune("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )((input) => typia.misc.prune<CommentTagTypeBigInt>(input));

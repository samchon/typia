import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_createValidatePrune_CommentTagArrayUnion =
  _test_misc_validatePrune("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )(typia.misc.createValidatePrune<CommentTagArrayUnion>());

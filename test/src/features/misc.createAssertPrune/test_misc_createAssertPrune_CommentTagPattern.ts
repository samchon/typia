import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createAssertPrune_CommentTagPattern =
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)(
    typia.misc.createAssertPrune<CommentTagPattern>(),
  );

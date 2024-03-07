import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_CommentTagInfinite =
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)(
    typia.misc.createAssertPrune<CommentTagInfinite>(),
  );

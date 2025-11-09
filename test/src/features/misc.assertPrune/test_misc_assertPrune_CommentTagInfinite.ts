import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_assertPrune_CommentTagInfinite = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)((input) =>
    typia.misc.assertPrune<CommentTagInfinite>(input),
  );

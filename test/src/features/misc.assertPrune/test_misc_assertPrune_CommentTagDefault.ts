import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_assertPrune_CommentTagDefault = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.misc.assertPrune<CommentTagDefault>(input),
  );

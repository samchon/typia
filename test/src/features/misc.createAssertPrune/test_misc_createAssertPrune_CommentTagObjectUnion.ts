import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createAssertPrune_CommentTagObjectUnion =
  _test_misc_assertPrune("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.misc.createAssertPrune<CommentTagObjectUnion>());

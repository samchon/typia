import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createIsPrune_CommentTagObjectUnion = (): void =>
  _test_misc_isPrune("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.misc.createIsPrune<CommentTagObjectUnion>());

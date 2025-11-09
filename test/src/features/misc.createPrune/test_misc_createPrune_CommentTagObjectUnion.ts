import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createPrune_CommentTagObjectUnion = (): void => _test_misc_prune(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.misc.createPrune<CommentTagObjectUnion>());

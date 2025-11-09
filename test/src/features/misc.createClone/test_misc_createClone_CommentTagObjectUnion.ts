import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createClone_CommentTagObjectUnion = (): void => _test_misc_clone(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.misc.createClone<CommentTagObjectUnion>());

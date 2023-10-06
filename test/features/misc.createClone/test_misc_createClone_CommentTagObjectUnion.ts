import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createClone_CommentTagObjectUnion = _test_misc_clone(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.misc.createClone<CommentTagObjectUnion>());

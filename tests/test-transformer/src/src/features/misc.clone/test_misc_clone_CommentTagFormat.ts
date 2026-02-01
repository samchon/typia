import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_clone_CommentTagFormat = (): void => _test_misc_clone(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.misc.clone<CommentTagFormat>(input));

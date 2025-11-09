import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_is_CommentTagDefault = (): void => _test_is(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.is<CommentTagDefault>(input));

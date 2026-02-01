import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_validateEquals_CommentTagPattern = (): void => _test_validateEquals(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.validateEquals<CommentTagPattern>(input));

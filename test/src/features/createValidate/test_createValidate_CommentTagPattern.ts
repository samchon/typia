import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createValidate_CommentTagPattern = (): void => _test_validate(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.createValidate<CommentTagPattern>());

import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createValidateEquals_CommentTagPattern = _test_validateEquals(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.createValidateEquals<CommentTagPattern>());

import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertEquals_CommentTagRange = _test_assertEquals(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createAssertEquals<CommentTagRange>());

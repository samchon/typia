import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createAssertPrune_CommentTagRange = _test_misc_assertPrune(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.misc.createAssertPrune<CommentTagRange>());

import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createAssertStringify_CommentTagRange = _test_json_assertStringify(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.json.createAssertStringify<CommentTagRange>());

import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_assertParse_CommentTagRange = _test_json_assertParse(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.json.assertParse<CommentTagRange>(input));

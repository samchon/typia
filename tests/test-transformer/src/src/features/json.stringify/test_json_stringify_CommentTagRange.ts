import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_stringify_CommentTagRange = (): void => _test_json_stringify(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.json.stringify<CommentTagRange>(input));

import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_stringify_CommentTagFormat = (): void => _test_json_stringify(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.json.stringify<CommentTagFormat>(input));

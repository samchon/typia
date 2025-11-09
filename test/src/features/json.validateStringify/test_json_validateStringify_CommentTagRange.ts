import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_validateStringify_CommentTagRange = (): void => _test_json_validateStringify(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.json.validateStringify<CommentTagRange>(input));

import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_validateStringify_CommentTagDefault = (): void => _test_json_validateStringify(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.json.validateStringify<CommentTagDefault>(input));

import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_validateStringify_CommentTagLength = _test_json_validateStringify(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.json.validateStringify<CommentTagLength>(input));

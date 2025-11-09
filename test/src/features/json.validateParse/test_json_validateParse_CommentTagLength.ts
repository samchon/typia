import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_validateParse_CommentTagLength = (): void => _test_json_validateParse(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.json.validateParse<CommentTagLength>(input));

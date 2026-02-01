import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_validateParse_CommentTagType = (): void => _test_json_validateParse(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.json.validateParse<CommentTagType>(input));

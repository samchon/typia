import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_createValidateParse_CommentTagLength = (): void => _test_json_validateParse(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.json.createValidateParse<CommentTagLength>());

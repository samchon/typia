import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createValidateParse_CommentTagDefault = (): void => _test_json_validateParse(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.json.createValidateParse<CommentTagDefault>());

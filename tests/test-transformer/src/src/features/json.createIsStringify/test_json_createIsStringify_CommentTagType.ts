import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createIsStringify_CommentTagType = (): void => _test_json_isStringify(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.json.createIsStringify<CommentTagType>());

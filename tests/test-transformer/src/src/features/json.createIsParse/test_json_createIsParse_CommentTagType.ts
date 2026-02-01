import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createIsParse_CommentTagType = (): void => _test_json_isParse(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.json.createIsParse<CommentTagType>());

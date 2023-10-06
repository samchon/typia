import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_isParse_CommentTagType = _test_json_isParse(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.json.isParse<CommentTagType>(input));

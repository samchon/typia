import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_createIsParse_CommentTagLength = _test_json_isParse(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.json.createIsParse<CommentTagLength>());

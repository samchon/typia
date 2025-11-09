import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_isParse_CommentTagDefault = (): void => _test_json_isParse(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.json.isParse<CommentTagDefault>(input));

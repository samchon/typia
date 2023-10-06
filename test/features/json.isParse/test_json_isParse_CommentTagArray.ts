import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_isParse_CommentTagArray = _test_json_isParse(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.json.isParse<CommentTagArray>(input));

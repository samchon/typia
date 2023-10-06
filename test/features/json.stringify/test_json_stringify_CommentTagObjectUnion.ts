import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_stringify_CommentTagObjectUnion = _test_json_stringify(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.json.stringify<CommentTagObjectUnion>(input));

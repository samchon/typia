import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_assertParse_CommentTagObjectUnion = _test_json_assertParse(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.json.assertParse<CommentTagObjectUnion>(input));

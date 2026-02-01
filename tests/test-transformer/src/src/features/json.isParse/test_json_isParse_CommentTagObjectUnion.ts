import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_isParse_CommentTagObjectUnion = (): void => _test_json_isParse(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.json.isParse<CommentTagObjectUnion>(input));

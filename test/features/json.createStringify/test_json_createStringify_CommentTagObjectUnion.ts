import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createStringify_CommentTagObjectUnion = _test_json_stringify(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.json.createStringify<CommentTagObjectUnion>());

import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createValidateParse_CommentTagObjectUnion = _test_json_validateParse(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.json.createValidateParse<CommentTagObjectUnion>());

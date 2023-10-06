import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_validateParse_CommentTagObjectUnion =
    _test_json_validateParse("CommentTagObjectUnion")<CommentTagObjectUnion>(
        CommentTagObjectUnion,
    )((input) => typia.json.validateParse<CommentTagObjectUnion>(input));

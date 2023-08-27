import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_isStringify_CommentTagObjectUnion =
    _test_json_isStringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
        CommentTagObjectUnion,
    )(typia.json.createIsStringify<CommentTagObjectUnion>());

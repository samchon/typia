import typia from "typia"
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_CommentTagPattern = 
    _test_json_application("ajv")("CommentTagPattern")(
        typia.json.application<[CommentTagPattern], "ajv">(),
    );
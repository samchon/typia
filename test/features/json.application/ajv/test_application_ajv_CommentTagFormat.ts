import typia from "typia"
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_CommentTagFormat = 
    _test_json_application("ajv")("CommentTagFormat")(
        typia.json.application<[CommentTagFormat], "ajv">(),
    );
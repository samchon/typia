import typia from "typia"
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_CommentTagArray = 
    _test_json_application("ajv")("CommentTagArray")(
        typia.json.application<[CommentTagArray], "ajv">(),
    );
import typia from "typia"
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_CommentTagRange = 
    _test_json_application("swagger")("CommentTagRange")(
        typia.json.application<[CommentTagRange], "swagger">(),
    );
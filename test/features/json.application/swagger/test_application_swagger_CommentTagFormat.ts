import typia from "typia"
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_CommentTagFormat = 
    _test_json_application("swagger")("CommentTagFormat")(
        typia.json.application<[CommentTagFormat], "swagger">(),
    );
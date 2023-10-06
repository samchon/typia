import typia from "typia"
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_CommentTagDefault = 
    _test_json_application("swagger")("CommentTagDefault")(
        typia.json.application<[CommentTagDefault], "swagger">(),
    );
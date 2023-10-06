import typia from "typia"
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_CommentTagObjectUnion = 
    _test_json_application("swagger")("CommentTagObjectUnion")(
        typia.json.application<[CommentTagObjectUnion], "swagger">(),
    );
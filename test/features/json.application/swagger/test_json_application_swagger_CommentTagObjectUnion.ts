import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_application_swagger_CommentTagObjectUnion =
    _test_json_application("swagger")("CommentTagObjectUnion")(
        typia.json.application<[CommentTagObjectUnion], "swagger">(),
    );

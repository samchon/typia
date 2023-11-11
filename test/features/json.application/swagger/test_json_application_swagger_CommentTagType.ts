import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_application_swagger_CommentTagType =
    _test_json_application("swagger")("CommentTagType")(
        typia.json.application<[CommentTagType], "swagger">(),
    );

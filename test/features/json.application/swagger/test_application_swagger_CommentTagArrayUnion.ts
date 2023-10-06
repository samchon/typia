import typia from "typia"
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_CommentTagArrayUnion = 
    _test_json_application("swagger")("CommentTagArrayUnion")(
        typia.json.application<[CommentTagArrayUnion], "swagger">(),
    );
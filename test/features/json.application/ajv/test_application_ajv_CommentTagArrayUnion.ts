import typia from "typia"
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_CommentTagArrayUnion = 
    _test_json_application("ajv")("CommentTagArrayUnion")(
        typia.json.application<[CommentTagArrayUnion], "ajv">(),
    );
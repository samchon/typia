import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_ajv_CommentTagPattern =
    _test_json_application("ajv")("CommentTagPattern")(
        typia.json.application<[CommentTagPattern], "ajv">(),
    );

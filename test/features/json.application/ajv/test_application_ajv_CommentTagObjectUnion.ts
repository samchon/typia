import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_application_ajv_CommentTagObjectUnion =
    _test_json_application("ajv")("CommentTagObjectUnion")(
        typia.json.application<[CommentTagObjectUnion], "ajv">(),
    );

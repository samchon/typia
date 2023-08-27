import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_application_swagger_CommentTagArray =
    _test_json_application("swagger")("CommentTagArray")(
        typia.json.application<[CommentTagArray], "swagger">(),
    );

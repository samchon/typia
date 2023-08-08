import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagTuple } from "../../../structures/TagTuple";

export const test_json_application_ajv_TagTuple = _test_json_application("ajv")(
    "TagTuple",
    typia.json.application<[TagTuple], "ajv">(),
);

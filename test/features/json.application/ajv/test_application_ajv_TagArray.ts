import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagArray } from "../../../structures/TagArray";

export const test_json_application_ajv_TagArray = _test_json_application("ajv")(
    "TagArray",
    typia.json.application<[TagArray], "ajv">(),
);

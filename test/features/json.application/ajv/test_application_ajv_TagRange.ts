import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagRange } from "../../../structures/TagRange";

export const test_json_application_ajv_TagRange = _test_json_application("ajv")(
    "TagRange",
)(typia.json.application<[TagRange], "ajv">());

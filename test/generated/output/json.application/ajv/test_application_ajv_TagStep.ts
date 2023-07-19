import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TagStep } from "../../../../structures/TagStep";

export const test_json_application_ajv_TagStep = _test_json_application("ajv")(
    "TagStep",
)(typia.json.application<[TagStep], "ajv">());

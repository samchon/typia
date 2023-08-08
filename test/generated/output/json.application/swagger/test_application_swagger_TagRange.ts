import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TagRange } from "../../../../structures/TagRange";

export const test_json_application_swagger_TagRange = _test_json_application(
    "swagger",
)("TagRange", typia.json.application<[TagRange], "swagger">());

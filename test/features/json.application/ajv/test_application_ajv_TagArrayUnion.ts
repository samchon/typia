import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_json_application_ajv_TagArrayUnion = _test_json_application(
    "ajv",
)("TagArrayUnion")(typia.json.application<[TagArrayUnion], "ajv">());

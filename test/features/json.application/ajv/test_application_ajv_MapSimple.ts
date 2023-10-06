import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { MapSimple } from "../../../structures/MapSimple";

export const test_json_application_ajv_MapSimple = _test_json_application(
    "ajv",
)("MapSimple")(typia.json.application<[MapSimple], "ajv">());

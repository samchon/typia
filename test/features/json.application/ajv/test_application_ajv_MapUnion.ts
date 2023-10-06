import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { MapUnion } from "../../../structures/MapUnion";

export const test_json_application_ajv_MapUnion = _test_json_application("ajv")(
    "MapUnion",
)(typia.json.application<[MapUnion], "ajv">());

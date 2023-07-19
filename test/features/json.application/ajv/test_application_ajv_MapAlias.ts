import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { MapAlias } from "../../../structures/MapAlias";

export const test_json_application_ajv_MapAlias = _test_json_application("ajv")(
    "MapAlias",
)(typia.json.application<[MapAlias], "ajv">());

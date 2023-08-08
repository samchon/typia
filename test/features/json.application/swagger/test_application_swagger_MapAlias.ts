import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { MapAlias } from "../../../structures/MapAlias";

export const test_json_application_swagger_MapAlias = _test_json_application(
    "swagger",
)("MapAlias", typia.json.application<[MapAlias], "swagger">());

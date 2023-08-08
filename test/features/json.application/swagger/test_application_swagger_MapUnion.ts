import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { MapUnion } from "../../../structures/MapUnion";

export const test_json_application_swagger_MapUnion = _test_json_application(
    "swagger",
)("MapUnion", typia.json.application<[MapUnion], "swagger">());

import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { MapSimple } from "../../../../structures/MapSimple";

export const test_json_application_swagger_MapSimple = _test_json_application(
    "swagger",
)("MapSimple", typia.json.application<[MapSimple], "swagger">());

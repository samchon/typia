import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";

export const test_json_application_swagger_ToJsonUnion = _test_json_application(
    "swagger",
)("ToJsonUnion", typia.json.application<[ToJsonUnion], "swagger">());

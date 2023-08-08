import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_swagger_DynamicEnumeration =
    _test_json_application("swagger")(
        "DynamicEnumeration",
        typia.json.application<[DynamicEnumeration], "swagger">(),
    );

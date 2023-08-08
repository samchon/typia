import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_json_application_swagger_DynamicTemplate =
    _test_json_application("swagger")(
        "DynamicTemplate",
        typia.json.application<[DynamicTemplate], "swagger">(),
    );

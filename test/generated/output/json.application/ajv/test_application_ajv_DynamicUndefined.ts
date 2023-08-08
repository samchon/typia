import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";

export const test_json_application_ajv_DynamicUndefined =
    _test_json_application("ajv")(
        "DynamicUndefined",
        typia.json.application<[DynamicUndefined], "ajv">(),
    );

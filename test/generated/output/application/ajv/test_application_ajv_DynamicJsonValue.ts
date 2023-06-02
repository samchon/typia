import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { DynamicJsonValue } from "../../../../structures/DynamicJsonValue";

export const test_application_ajv_DynamicJsonValue = _test_application("ajv")(
    "DynamicJsonValue",
    typia.application<[DynamicJsonValue], "ajv">(),
);

import typia from "typia";

import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicUndefined = _test_application("ajv")(
    "DynamicUndefined",
    typia.application<[DynamicUndefined], "ajv">(),
);

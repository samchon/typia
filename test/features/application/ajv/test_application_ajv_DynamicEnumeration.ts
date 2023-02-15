import typia from "typia";

import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicEnumeration = _test_application("ajv")(
    "DynamicEnumeration",
    typia.application<[DynamicEnumeration], "ajv">(),
);

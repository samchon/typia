import typia from "typia";

import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayAny = _test_application("ajv")(
    "ArrayAny",
    typia.application<[ArrayAny], "ajv">(),
);

import typia from "typia";

import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArraySimple = _test_application("ajv")(
    "ArraySimple",
    typia.application<[ArraySimple], "ajv">(),
);

import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";

export const test_json_application_ajv_TupleRestArray = _test_json_application(
    "ajv",
)("TupleRestArray", typia.json.application<[TupleRestArray], "ajv">());

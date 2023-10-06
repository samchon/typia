import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_application_ajv_TupleRestAtomic = _test_json_application(
    "ajv",
)("TupleRestAtomic")(typia.json.application<[TupleRestAtomic], "ajv">());

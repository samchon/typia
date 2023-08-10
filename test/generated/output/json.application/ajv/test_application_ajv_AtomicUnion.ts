import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicUnion } from "../../../../structures/AtomicUnion";

export const test_json_application_ajv_AtomicUnion = _test_json_application(
    "ajv",
)("AtomicUnion")(typia.json.application<[AtomicUnion], "ajv">());

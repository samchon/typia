import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TagAtomicUnion } from "../../../../structures/TagAtomicUnion";

export const test_json_application_ajv_TagAtomicUnion = _test_json_application(
    "ajv",
)("TagAtomicUnion", typia.json.application<[TagAtomicUnion], "ajv">());

import typia from "typia";

import { _test_application } from "../../../../internal/_test_application";
import { ConstantIntersection } from "../../../../structures/ConstantIntersection";

export const test_application_ajv_ConstantIntersection = _test_application(
    "ajv",
)("ConstantIntersection", typia.application<[ConstantIntersection], "ajv">());

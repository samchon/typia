import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";
export const test_application_ajv_ToJsonUnion = _test_application("ajv")("ToJsonUnion", typia.application<[
    ToJsonUnion
], "ajv">());

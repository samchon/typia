import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { SetUnion } from "../../../../structures/SetUnion";
export const test_application_ajv_SetUnion = _test_application("ajv")("SetUnion", typia.application<[
    SetUnion
], "ajv">());

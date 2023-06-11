import typia from "typia";
import { SetSimple } from "../../../../structures/SetSimple";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_SetSimple = _test_application("ajv")("SetSimple", typia.application<[
    SetSimple
], "ajv">());

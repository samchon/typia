import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicNever } from "../../../../structures/DynamicNever";
export const test_application_ajv_DynamicNever = _test_application("ajv")("DynamicNever", typia.application<[
    DynamicNever
], "ajv">());

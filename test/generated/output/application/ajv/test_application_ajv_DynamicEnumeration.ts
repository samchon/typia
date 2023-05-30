import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";
export const test_application_ajv_DynamicEnumeration = _test_application("ajv")("DynamicEnumeration", typia.application<[
    DynamicEnumeration
], "ajv">());

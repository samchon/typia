import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantEnumeration } from "../../../../structures/ConstantEnumeration";
export const test_application_ajv_ConstantEnumeration = _test_application("ajv")("ConstantEnumeration", typia.application<[
    ConstantEnumeration
], "ajv">());

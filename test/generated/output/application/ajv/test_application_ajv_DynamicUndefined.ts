import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";
export const test_application_ajv_DynamicUndefined = _test_application("ajv")("DynamicUndefined", typia.application<[
    DynamicUndefined
], "ajv">());

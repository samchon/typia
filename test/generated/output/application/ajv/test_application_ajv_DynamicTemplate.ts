import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";
export const test_application_ajv_DynamicTemplate = _test_application("ajv")("DynamicTemplate", typia.application<[
    DynamicTemplate
], "ajv">());

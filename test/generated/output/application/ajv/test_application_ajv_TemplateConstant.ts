import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";
export const test_application_ajv_TemplateConstant = _test_application("ajv")("TemplateConstant", typia.application<[
    TemplateConstant
], "ajv">());

import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TemplateUnion } from "../../../../structures/TemplateUnion";
export const test_application_ajv_TemplateUnion = _test_application("ajv")("TemplateUnion", typia.application<[
    TemplateUnion
], "ajv">());

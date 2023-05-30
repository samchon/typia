import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TemplateAtomic } from "../../../../structures/TemplateAtomic";
export const test_application_ajv_TemplateAtomic = _test_application("ajv")("TemplateAtomic", typia.application<[
    TemplateAtomic
], "ajv">());

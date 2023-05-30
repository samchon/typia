import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";
export const test_application_swagger_TemplateConstant = _test_application("swagger")("TemplateConstant", typia.application<[
    TemplateConstant
], "swagger">());

import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";
export const test_application_swagger_DynamicTemplate = _test_application("swagger")("DynamicTemplate", typia.application<[
    DynamicTemplate
], "swagger">());

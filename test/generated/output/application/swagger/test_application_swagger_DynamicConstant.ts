import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";
export const test_application_swagger_DynamicConstant = _test_application("swagger")("DynamicConstant", typia.application<[
    DynamicConstant
], "swagger">());

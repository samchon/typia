import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicNever } from "../../../../structures/DynamicNever";
export const test_application_swagger_DynamicNever = _test_application("swagger")("DynamicNever", typia.application<[
    DynamicNever
], "swagger">());

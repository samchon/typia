import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";
export const test_application_swagger_DynamicSimple = _test_application("swagger")("DynamicSimple", typia.application<[
    DynamicSimple
], "swagger">());

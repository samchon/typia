import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ClassMethod } from "../../../../structures/ClassMethod";
export const test_application_swagger_ClassMethod = _test_application("swagger")("ClassMethod", typia.application<[
    ClassMethod
], "swagger">());

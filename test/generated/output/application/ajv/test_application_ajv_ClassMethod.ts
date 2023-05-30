import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ClassMethod } from "../../../../structures/ClassMethod";
export const test_application_ajv_ClassMethod = _test_application("ajv")("ClassMethod", typia.application<[
    ClassMethod
], "ajv">());

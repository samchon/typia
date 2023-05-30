import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";
export const test_application_ajv_ClassPropertyAssignment = _test_application("ajv")("ClassPropertyAssignment", typia.application<[
    ClassPropertyAssignment
], "ajv">());

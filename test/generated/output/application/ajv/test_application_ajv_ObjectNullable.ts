import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";
export const test_application_ajv_ObjectNullable = _test_application("ajv")("ObjectNullable", typia.application<[
    ObjectNullable
], "ajv">());

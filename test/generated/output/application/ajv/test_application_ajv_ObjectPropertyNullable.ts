import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";
export const test_application_ajv_ObjectPropertyNullable = _test_application("ajv")("ObjectPropertyNullable", typia.application<[
    ObjectPropertyNullable
], "ajv">());

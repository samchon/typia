import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";
export const test_application_ajv_ObjectIntersection = _test_application("ajv")("ObjectIntersection", typia.application<[
    ObjectIntersection
], "ajv">());

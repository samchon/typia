import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionDouble } from "../../../../structures/ObjectUnionDouble";
export const test_application_ajv_ObjectUnionDouble = _test_application("ajv")("ObjectUnionDouble", typia.application<[
    ObjectUnionDouble
], "ajv">());

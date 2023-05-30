import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";
export const test_application_ajv_ObjectTuple = _test_application("ajv")("ObjectTuple", typia.application<[
    ObjectTuple
], "ajv">());

import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";
export const test_application_ajv_ObjectPrimitive = _test_application("ajv")("ObjectPrimitive", typia.application<[
    ObjectPrimitive
], "ajv">());

import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";
export const test_application_ajv_ObjectRecursive = _test_application("ajv")("ObjectRecursive", typia.application<[
    ObjectRecursive
], "ajv">());

import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";
export const test_application_ajv_ObjectGenericArray = _test_application("ajv")("ObjectGenericArray", typia.application<[
    ObjectGenericArray
], "ajv">());

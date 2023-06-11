import typia from "typia";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_ObjectGeneric = _test_application("ajv")("ObjectGeneric", typia.application<[
    ObjectGeneric
], "ajv">());

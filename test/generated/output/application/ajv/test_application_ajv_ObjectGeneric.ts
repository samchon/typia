import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";
export const test_application_ajv_ObjectGeneric = _test_application("ajv")("ObjectGeneric", typia.application<[
    ObjectGeneric
], "ajv">());

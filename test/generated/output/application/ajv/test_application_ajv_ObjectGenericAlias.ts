import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGenericAlias } from "../../../../structures/ObjectGenericAlias";
export const test_application_ajv_ObjectGenericAlias = _test_application("ajv")("ObjectGenericAlias", typia.application<[
    ObjectGenericAlias
], "ajv">());

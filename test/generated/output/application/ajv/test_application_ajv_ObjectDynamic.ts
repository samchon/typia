import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";
export const test_application_ajv_ObjectDynamic = _test_application("ajv")("ObjectDynamic", typia.application<[
    ObjectDynamic
], "ajv">());

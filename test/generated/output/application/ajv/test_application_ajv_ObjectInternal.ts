import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";
export const test_application_ajv_ObjectInternal = _test_application("ajv")("ObjectInternal", typia.application<[
    ObjectInternal
], "ajv">());

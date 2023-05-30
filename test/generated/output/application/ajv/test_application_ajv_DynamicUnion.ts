import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";
export const test_application_ajv_DynamicUnion = _test_application("ajv")("DynamicUnion", typia.application<[
    DynamicUnion
], "ajv">());

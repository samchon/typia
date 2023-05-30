import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";
export const test_application_ajv_UltimateUnion = _test_application("ajv")("UltimateUnion", typia.application<[
    UltimateUnion
], "ajv">());

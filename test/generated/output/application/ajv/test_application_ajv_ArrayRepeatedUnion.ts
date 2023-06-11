import typia from "typia";
import { ArrayRepeatedUnion } from "../../../../structures/ArrayRepeatedUnion";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_ArrayRepeatedUnion = _test_application("ajv")("ArrayRepeatedUnion", typia.application<[
    ArrayRepeatedUnion
], "ajv">());

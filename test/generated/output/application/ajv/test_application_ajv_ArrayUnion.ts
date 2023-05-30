import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayUnion } from "../../../../structures/ArrayUnion";
export const test_application_ajv_ArrayUnion = _test_application("ajv")("ArrayUnion", typia.application<[
    ArrayUnion
], "ajv">());

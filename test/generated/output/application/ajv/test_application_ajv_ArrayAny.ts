import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAny } from "../../../../structures/ArrayAny";
export const test_application_ajv_ArrayAny = _test_application("ajv")("ArrayAny", typia.application<[
    ArrayAny
], "ajv">());

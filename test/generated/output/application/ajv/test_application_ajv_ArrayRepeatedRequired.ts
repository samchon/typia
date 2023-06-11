import typia from "typia";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_ArrayRepeatedRequired = _test_application("ajv")("ArrayRepeatedRequired", typia.application<[
    ArrayRepeatedRequired
], "ajv">());

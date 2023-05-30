import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArraySimple } from "../../../../structures/ArraySimple";
export const test_application_ajv_ArraySimple = _test_application("ajv")("ArraySimple", typia.application<[
    ArraySimple
], "ajv">());

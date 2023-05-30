import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { NativeSimple } from "../../../../structures/NativeSimple";
export const test_application_ajv_NativeSimple = _test_application("ajv")("NativeSimple", typia.application<[
    NativeSimple
], "ajv">());

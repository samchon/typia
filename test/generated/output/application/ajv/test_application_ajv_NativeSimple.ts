import typia from "typia";
import { NativeSimple } from "../../../structures/NativeSimple";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_NativeSimple = _test_application("ajv")("NativeSimple", typia.application<[
    NativeSimple
], "ajv">());

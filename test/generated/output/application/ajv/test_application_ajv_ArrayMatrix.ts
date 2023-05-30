import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";
export const test_application_ajv_ArrayMatrix = _test_application("ajv")("ArrayMatrix", typia.application<[
    ArrayMatrix
], "ajv">());

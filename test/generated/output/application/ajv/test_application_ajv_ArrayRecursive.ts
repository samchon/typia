import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_ArrayRecursive = _test_application("ajv")("ArrayRecursive", typia.application<[
    ArrayRecursive
], "ajv">());

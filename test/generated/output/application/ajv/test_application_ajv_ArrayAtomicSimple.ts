import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";
export const test_application_ajv_ArrayAtomicSimple = _test_application("ajv")("ArrayAtomicSimple", typia.application<[
    ArrayAtomicSimple
], "ajv">());

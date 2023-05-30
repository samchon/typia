import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";
export const test_application_swagger_ArrayAtomicSimple = _test_application("swagger")("ArrayAtomicSimple", typia.application<[
    ArrayAtomicSimple
], "swagger">());

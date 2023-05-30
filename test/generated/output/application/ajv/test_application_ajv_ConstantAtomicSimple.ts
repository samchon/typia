import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";
export const test_application_ajv_ConstantAtomicSimple = _test_application("ajv")("ConstantAtomicSimple", typia.application<[
    ConstantAtomicSimple
], "ajv">());

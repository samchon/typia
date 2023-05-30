import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";
export const test_application_ajv_ConstantAtomicWrapper = _test_application("ajv")("ConstantAtomicWrapper", typia.application<[
    ConstantAtomicWrapper
], "ajv">());

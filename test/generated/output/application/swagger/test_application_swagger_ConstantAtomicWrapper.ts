import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";
export const test_application_swagger_ConstantAtomicWrapper = _test_application("swagger")("ConstantAtomicWrapper", typia.application<[
    ConstantAtomicWrapper
], "swagger">());

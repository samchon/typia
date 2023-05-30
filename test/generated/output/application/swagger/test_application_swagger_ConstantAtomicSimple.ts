import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";
export const test_application_swagger_ConstantAtomicSimple = _test_application("swagger")("ConstantAtomicSimple", typia.application<[
    ConstantAtomicSimple
], "swagger">());

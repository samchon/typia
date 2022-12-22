import typia from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantAtomicSimple = _test_application(
    "ajv",
)("ConstantAtomicSimple", typia.application<[ConstantAtomicSimple], "ajv">());

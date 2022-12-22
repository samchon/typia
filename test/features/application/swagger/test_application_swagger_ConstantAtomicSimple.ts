import typia from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantAtomicSimple = _test_application(
    "swagger",
)(
    "ConstantAtomicSimple",
    typia.application<[ConstantAtomicSimple], "swagger">(),
);

import typia from "typia"
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantAtomicUnion = 
    _test_application("swagger")(
        "ConstantAtomicUnion",
        typia.application<[ConstantAtomicUnion], "swagger">(),
    );
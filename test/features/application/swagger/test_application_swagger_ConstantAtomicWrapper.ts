import typia from "typia"
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantAtomicWrapper = 
    _test_application("swagger")(
        "ConstantAtomicWrapper",
        typia.application<[ConstantAtomicWrapper], "swagger">(),
    );
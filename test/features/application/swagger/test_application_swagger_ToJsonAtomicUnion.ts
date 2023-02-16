import typia from "typia"
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonAtomicUnion = 
    _test_application("swagger")(
        "ToJsonAtomicUnion",
        typia.application<[ToJsonAtomicUnion], "swagger">(),
    );
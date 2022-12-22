import typia from "../../../../src";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonAtomicSimple = 
    _test_application("swagger")(
        "ToJsonAtomicSimple",
        typia.application<[ToJsonAtomicSimple], "swagger">(),
    );
import typia from "typia"
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ToJsonNull = 
    _test_application("swagger")(
        "ToJsonNull",
        typia.application<[ToJsonNull], "swagger">(),
    );
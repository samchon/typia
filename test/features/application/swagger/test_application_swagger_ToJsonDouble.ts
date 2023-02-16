import typia from "typia"
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonDouble = 
    _test_application("swagger")(
        "ToJsonDouble",
        typia.application<[ToJsonDouble], "swagger">(),
    );
import typia from "typia"
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_DynamicJsonValue = 
    _test_application("swagger")(
        "DynamicJsonValue",
        typia.application<[DynamicJsonValue], "swagger">(),
    );
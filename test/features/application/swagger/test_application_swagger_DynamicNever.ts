import typia from "typia"
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicNever = 
    _test_application("swagger")(
        "DynamicNever",
        typia.application<[DynamicNever], "swagger">(),
    );
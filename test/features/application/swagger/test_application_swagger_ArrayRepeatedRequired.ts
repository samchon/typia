import typia from "typia"
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ArrayRepeatedRequired = 
    _test_application("swagger")(
        "ArrayRepeatedRequired",
        typia.application<[ArrayRepeatedRequired], "swagger">(),
    );
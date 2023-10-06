import typia from "typia"
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ArrayRepeatedRequired = 
    _test_json_application("swagger")("ArrayRepeatedRequired")(
        typia.json.application<[ArrayRepeatedRequired], "swagger">(),
    );
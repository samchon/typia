import typia from "typia"
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ArrayRepeatedRequired = 
    _test_json_application("ajv")("ArrayRepeatedRequired")(
        typia.json.application<[ArrayRepeatedRequired], "ajv">(),
    );
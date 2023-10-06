import typia from "typia"
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ArrayRepeatedNullable = 
    _test_json_application("ajv")("ArrayRepeatedNullable")(
        typia.json.application<[ArrayRepeatedNullable], "ajv">(),
    );
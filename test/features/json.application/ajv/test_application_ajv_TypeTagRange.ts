import typia from "typia"
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_TypeTagRange = 
    _test_json_application("ajv")("TypeTagRange")(
        typia.json.application<[TypeTagRange], "ajv">(),
    );
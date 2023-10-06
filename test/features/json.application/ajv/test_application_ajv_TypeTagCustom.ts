import typia from "typia"
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_TypeTagCustom = 
    _test_json_application("ajv")("TypeTagCustom")(
        typia.json.application<[TypeTagCustom], "ajv">(),
    );
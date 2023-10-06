import typia from "typia"
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_DynamicSimple = 
    _test_json_application("ajv")("DynamicSimple")(
        typia.json.application<[DynamicSimple], "ajv">(),
    );
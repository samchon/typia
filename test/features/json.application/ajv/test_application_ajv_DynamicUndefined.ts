import typia from "typia"
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_DynamicUndefined = 
    _test_json_application("ajv")("DynamicUndefined")(
        typia.json.application<[DynamicUndefined], "ajv">(),
    );
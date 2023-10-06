import typia from "typia"
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_DynamicTree = 
    _test_json_application("ajv")("DynamicTree")(
        typia.json.application<[DynamicTree], "ajv">(),
    );
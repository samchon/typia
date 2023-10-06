import typia from "typia"
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ToJsonNull = 
    _test_json_application("ajv")("ToJsonNull")(
        typia.json.application<[ToJsonNull], "ajv">(),
    );
import typia from "typia"
import { SetUnion } from "../../../structures/SetUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_SetUnion = 
    _test_json_application("ajv")("SetUnion")(
        typia.json.application<[SetUnion], "ajv">(),
    );
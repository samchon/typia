import typia from "typia"
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ToJsonTuple = 
    _test_json_application("ajv")("ToJsonTuple")(
        typia.json.application<[ToJsonTuple], "ajv">(),
    );
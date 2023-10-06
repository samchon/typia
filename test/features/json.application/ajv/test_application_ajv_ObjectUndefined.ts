import typia from "typia"
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectUndefined = 
    _test_json_application("ajv")("ObjectUndefined")(
        typia.json.application<[ObjectUndefined], "ajv">(),
    );
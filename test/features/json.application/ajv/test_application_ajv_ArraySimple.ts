import typia from "typia"
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ArraySimple = 
    _test_json_application("ajv")("ArraySimple")(
        typia.json.application<[ArraySimple], "ajv">(),
    );
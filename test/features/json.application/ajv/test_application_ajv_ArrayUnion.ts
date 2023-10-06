import typia from "typia"
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ArrayUnion = 
    _test_json_application("ajv")("ArrayUnion")(
        typia.json.application<[ArrayUnion], "ajv">(),
    );
import typia from "typia"
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_DynamicArray = 
    _test_json_application("ajv")("DynamicArray")(
        typia.json.application<[DynamicArray], "ajv">(),
    );
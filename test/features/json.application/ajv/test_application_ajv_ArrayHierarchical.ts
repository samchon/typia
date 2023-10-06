import typia from "typia"
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ArrayHierarchical = 
    _test_json_application("ajv")("ArrayHierarchical")(
        typia.json.application<[ArrayHierarchical], "ajv">(),
    );
import typia from "typia"
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectIntersection = 
    _test_json_application("ajv")("ObjectIntersection")(
        typia.json.application<[ObjectIntersection], "ajv">(),
    );
import typia from "typia"
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ConstantIntersection = 
    _test_json_application("ajv")("ConstantIntersection")(
        typia.json.application<[ConstantIntersection], "ajv">(),
    );
import typia from "typia"
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_DynamicConstant = 
    _test_json_application("swagger")("DynamicConstant")(
        typia.json.application<[DynamicConstant], "swagger">(),
    );
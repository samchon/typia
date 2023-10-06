import typia from "typia"
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_DynamicNever = 
    _test_json_application("swagger")("DynamicNever")(
        typia.json.application<[DynamicNever], "swagger">(),
    );
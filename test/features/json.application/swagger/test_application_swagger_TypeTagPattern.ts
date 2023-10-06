import typia from "typia"
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TypeTagPattern = 
    _test_json_application("swagger")("TypeTagPattern")(
        typia.json.application<[TypeTagPattern], "swagger">(),
    );
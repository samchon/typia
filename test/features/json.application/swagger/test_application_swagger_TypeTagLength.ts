import typia from "typia"
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TypeTagLength = 
    _test_json_application("swagger")("TypeTagLength")(
        typia.json.application<[TypeTagLength], "swagger">(),
    );
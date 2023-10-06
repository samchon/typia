import typia from "typia"
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TypeTagCustom = 
    _test_json_application("swagger")("TypeTagCustom")(
        typia.json.application<[TypeTagCustom], "swagger">(),
    );
import typia from "typia"
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TypeTagDefault = 
    _test_json_application("swagger")("TypeTagDefault")(
        typia.json.application<[TypeTagDefault], "swagger">(),
    );
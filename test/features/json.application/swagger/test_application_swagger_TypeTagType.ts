import typia from "typia"
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TypeTagType = 
    _test_json_application("swagger")("TypeTagType")(
        typia.json.application<[TypeTagType], "swagger">(),
    );
import typia from "typia"
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectPropertyNullable = 
    _test_json_application("swagger")("ObjectPropertyNullable")(
        typia.json.application<[ObjectPropertyNullable], "swagger">(),
    );
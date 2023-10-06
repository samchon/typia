import typia from "typia"
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectNullable = 
    _test_json_application("swagger")("ObjectNullable")(
        typia.json.application<[ObjectNullable], "swagger">(),
    );
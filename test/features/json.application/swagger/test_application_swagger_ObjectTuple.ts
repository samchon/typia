import typia from "typia"
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectTuple = 
    _test_json_application("swagger")("ObjectTuple")(
        typia.json.application<[ObjectTuple], "swagger">(),
    );
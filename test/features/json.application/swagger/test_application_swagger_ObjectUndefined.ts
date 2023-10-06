import typia from "typia"
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectUndefined = 
    _test_json_application("swagger")("ObjectUndefined")(
        typia.json.application<[ObjectUndefined], "swagger">(),
    );
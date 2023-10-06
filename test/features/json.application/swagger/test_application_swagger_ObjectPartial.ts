import typia from "typia"
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectPartial = 
    _test_json_application("swagger")("ObjectPartial")(
        typia.json.application<[ObjectPartial], "swagger">(),
    );
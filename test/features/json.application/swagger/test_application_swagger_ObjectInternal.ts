import typia from "typia"
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectInternal = 
    _test_json_application("swagger")("ObjectInternal")(
        typia.json.application<[ObjectInternal], "swagger">(),
    );
import typia from "typia"
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectDynamic = 
    _test_json_application("swagger")("ObjectDynamic")(
        typia.json.application<[ObjectDynamic], "swagger">(),
    );
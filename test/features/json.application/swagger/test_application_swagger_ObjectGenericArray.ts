import typia from "typia"
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectGenericArray = 
    _test_json_application("swagger")("ObjectGenericArray")(
        typia.json.application<[ObjectGenericArray], "swagger">(),
    );
import typia from "typia"
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectGenericArray = 
    _test_json_application("ajv")("ObjectGenericArray")(
        typia.json.application<[ObjectGenericArray], "ajv">(),
    );
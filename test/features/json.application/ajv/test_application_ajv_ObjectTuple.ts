import typia from "typia"
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectTuple = 
    _test_json_application("ajv")("ObjectTuple")(
        typia.json.application<[ObjectTuple], "ajv">(),
    );
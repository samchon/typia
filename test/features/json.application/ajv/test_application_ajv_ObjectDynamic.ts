import typia from "typia"
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectDynamic = 
    _test_json_application("ajv")("ObjectDynamic")(
        typia.json.application<[ObjectDynamic], "ajv">(),
    );
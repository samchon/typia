import typia from "typia"
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_ObjectUnionNonPredictable = 
    _test_json_application("ajv")("ObjectUnionNonPredictable")(
        typia.json.application<[ObjectUnionNonPredictable], "ajv">(),
    );
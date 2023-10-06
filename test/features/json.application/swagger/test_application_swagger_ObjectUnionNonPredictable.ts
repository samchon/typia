import typia from "typia"
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectUnionNonPredictable = 
    _test_json_application("swagger")("ObjectUnionNonPredictable")(
        typia.json.application<[ObjectUnionNonPredictable], "swagger">(),
    );
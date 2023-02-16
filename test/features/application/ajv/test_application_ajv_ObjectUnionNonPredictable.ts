import typia from "typia"
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUnionNonPredictable = 
    _test_application("ajv")(
        "ObjectUnionNonPredictable",
        typia.application<[ObjectUnionNonPredictable], "ajv">(),
    );
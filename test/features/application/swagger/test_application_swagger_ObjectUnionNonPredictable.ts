import typia from "typia"
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ObjectUnionNonPredictable = 
    _test_application("swagger")(
        "ObjectUnionNonPredictable",
        typia.application<[ObjectUnionNonPredictable], "swagger">(),
    );
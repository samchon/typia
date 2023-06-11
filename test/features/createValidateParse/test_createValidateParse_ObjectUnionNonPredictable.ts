import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createValidateParse_ObjectUnionNonPredictable =
    _test_validateParse(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createValidateParse<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

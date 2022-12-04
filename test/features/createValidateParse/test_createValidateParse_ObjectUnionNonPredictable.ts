import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectUnionNonPredictable =
    _test_validateParse(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        TSON.createValidateParse<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

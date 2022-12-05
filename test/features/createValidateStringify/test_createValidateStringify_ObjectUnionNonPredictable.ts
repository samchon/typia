import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectUnionNonPredictable =
    _test_validateStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        TSON.createValidateStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createValidateClone_ObjectUnionNonPredictable =
    _test_validateClone(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createValidateClone<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

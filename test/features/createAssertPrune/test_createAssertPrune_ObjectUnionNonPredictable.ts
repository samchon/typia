import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertPrune_ObjectUnionNonPredictable =
    _test_assertPrune(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createAssertPrune<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

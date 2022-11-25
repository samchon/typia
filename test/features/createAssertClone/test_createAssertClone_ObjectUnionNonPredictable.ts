import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUnionNonPredictable =
    _test_assertClone(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        TSON.createAssertClone<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_assertClone_ObjectUnionNonPredictable =
    _test_misc_assertClone(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.misc.createAssertClone<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

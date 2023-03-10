import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertStringify_ObjectUnionNonPredictable =
    _test_assertStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createAssertStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );

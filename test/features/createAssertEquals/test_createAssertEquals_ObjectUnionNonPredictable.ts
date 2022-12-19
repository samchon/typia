import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectUnionNonPredictable = _test_assertEquals(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createAssertEquals<ObjectUnionNonPredictable>(),
);
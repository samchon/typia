import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectUnionExplicit = _test_assertPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assertPrune(input),
    ObjectUnionExplicit.SPOILERS,
);
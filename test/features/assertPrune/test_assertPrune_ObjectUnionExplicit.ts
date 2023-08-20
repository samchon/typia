import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertPrune_ObjectUnionExplicit = _test_assertPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assertPrune<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);

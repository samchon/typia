import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertPrune_ObjectUnionExplicit = _test_assertPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertPrune<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);

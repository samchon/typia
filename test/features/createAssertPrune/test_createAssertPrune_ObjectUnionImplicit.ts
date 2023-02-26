import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertPrune_ObjectUnionImplicit = _test_assertPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createAssertPrune<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);

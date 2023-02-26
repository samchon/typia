import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidatePrune_ObjectUnionExplicit = _test_validatePrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidatePrune<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);

import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createValidatePrune_ObjectUnionImplicit = _test_validatePrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createValidatePrune<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);

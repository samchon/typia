import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidatePrune_ObjectGeneric = _test_validatePrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidatePrune<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);

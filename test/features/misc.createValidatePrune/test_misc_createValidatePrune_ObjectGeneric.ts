import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_validatePrune_ObjectGeneric = _test_misc_validatePrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.misc.createValidatePrune<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);

import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createValidatePrune_ObjectGenericArray = _test_validatePrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createValidatePrune<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);

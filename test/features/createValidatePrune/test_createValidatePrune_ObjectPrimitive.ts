import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createValidatePrune_ObjectPrimitive = _test_validatePrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidatePrune<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);

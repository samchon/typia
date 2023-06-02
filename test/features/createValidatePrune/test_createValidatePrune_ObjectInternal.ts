import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createValidatePrune_ObjectInternal = _test_validatePrune(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createValidatePrune<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);

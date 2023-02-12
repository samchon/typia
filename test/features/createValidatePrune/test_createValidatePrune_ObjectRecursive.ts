import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectRecursive = _test_validatePrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createValidatePrune<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_validatePrune_ObjectRecursive = _test_validatePrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validatePrune<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);

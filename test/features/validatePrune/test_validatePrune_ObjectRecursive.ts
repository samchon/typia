import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectRecursive = _test_validatePrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validatePrune(input),
    ObjectRecursive.SPOILERS,
);
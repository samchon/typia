import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_validatePrune_ObjectRecursive = _test_misc_validatePrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.misc.validatePrune(input),
    ObjectRecursive.SPOILERS,
);

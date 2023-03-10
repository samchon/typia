import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertPrune_ObjectRecursive = _test_assertPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertPrune(input),
    ObjectRecursive.SPOILERS,
);
